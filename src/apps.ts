import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import { simpleGit } from "simple-git";
import * as yaml from "yaml";
import { z } from "zod";
import {
  generateJsObject,
  generateJsObjectParameter,
  translateDirectory,
} from "./translator";
import {
  Application,
  Hook,
} from "@buf/normalframework_nf.bufbuild_es/normalgw/automation/v1/program_pb";

const REPO =
  "https://github.com/normalframework/applications-template-empty.git";
const HOOKS_LIB = "lib";
const HOOKS_FOLDER = "hooks";
const HOOK_DEFS_FOLDER = "hooks-update";

const configSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  hooks: z
    .array(
      z.object({
        name: z.string(),
        controller: z.string(),
        schedule: z.string().optional(),
      })
    )
    .optional(),
});

type Config = z.infer<typeof configSchema>;

async function loadConfig(filePath: string) {
  const content = fs.readFileSync(filePath, "utf-8");
  const ext = filePath.split(".").pop()?.toLowerCase();
  let parsedData: any;
  if (ext === "json") {
    parsedData = JSON.parse(content);
  } else if (ext === "yaml" || ext === "yml") {
    parsedData = yaml.parse(content);
  } else {
    throw new Error("Unsupported file format. Use .json, .yaml, or .yml");
  }

  // Validate with Zod schema
  const result = configSchema.safeParse(parsedData);
  if (!result.success) {
    console.error("Validation errors:", result.error.format());
    throw new Error("Invalid configuration file");
  }

  return result.data;
}

export async function generateApp({
  input,
  output,
  name,
  description,
  config,
}: {
  input?: string;
  output?: string;
  name?: string;
  description?: string;
  config?: string;
}) {
  let appConfig: Config = {
    name: name ?? "",
    description: description ?? "",
    hooks: [],
  };

  if (config && fs.existsSync(config)) {
    const configValue = await loadConfig(config);
    appConfig = {
      name: name ?? configValue.name,
      description: description ?? configValue.description,
      hooks: configValue.hooks ?? [],
    };
  }

  const res = await inquirer.prompt([
    {
      type: "input",
      name: "input",
      required: true,
      message: "Modelica directory to translate",
      when: !input,
    },
    {
      type: "input",
      name: "output",
      required: true,
      message: "Output app folder",
      default: output,
      when: !output,
    },
    {
      type: "confirm",
      name: "override",
      message: "Override existing app folder",
      when: (answers) => {
        const folder = answers.output ?? output;
        return fs.existsSync(folder);
      },
    },
    {
      type: "input",
      name: "output",
      message: "Output app folder",
      required: true,
      default: output,
      when: !output,
    },
    {
      type: "input",
      name: "name",
      message: "App name",
      required: true,
      when: !appConfig.name,
    },
    {
      type: "input",
      name: "description",
      message: "App description",
      when: !appConfig.description,
    },
  ]);

  appConfig = {
    ...appConfig,
    name: res.name ?? appConfig.name,
    description: res.description ?? appConfig.description,
  };

  const inputFolder = res.input ?? input;
  const outputFolder = res.output ?? output;
  if (!fs.existsSync(inputFolder)) {
    console.error(`Input folder ${inputFolder} does not exist`);
    process.exit(1);
  }

  if (res.override) {
    fs.rmSync(outputFolder, { recursive: true });
  }
  if (res.override === false) {
    console.error("Output folder already exists");
    process.exit(1);
  }

  await cloneApp(outputFolder);

  await translateDirectory(inputFolder, path.join(outputFolder, HOOKS_LIB), {
    visualize: false,
  });

  createAppDef(appConfig, outputFolder);
  await createHooks(appConfig, outputFolder);
  console.error(path.join(outputFolder, ".git"));
  fs.rmdirSync(path.join(outputFolder, ".git"), { recursive: true });
  await createNewGitRepo(outputFolder);
}

async function cloneApp(out: string) {
  await simpleGit().clone(REPO, out);
}

function createAppDef(config: Config, out: string) {
  const appDef: Partial<Application> = {
    name: config.name,
    description: config.description,
  };
  fs.writeFileSync(path.join(out, "app.json"), JSON.stringify(appDef, null, 2));
}

async function createHooks(config: Config, out: string) {
  if (!config.hooks?.length) {
    return;
  }
  const basePath = path.join(out, HOOKS_FOLDER);
  const hookDefsPath = path.join(out, HOOK_DEFS_FOLDER);

  fs.mkdirSync(basePath, { recursive: true });
  fs.mkdirSync(hookDefsPath, { recursive: true });
  for (const hook of config.hooks) {
    const controllerFile = path.join(out, HOOKS_LIB, hook.controller);
    if (!fs.existsSync(controllerFile)) {
      console.error(`Hook controller file ${controllerFile} does not exist`);
      process.exit(1);
    }
    const controllerDefFile = controllerFile.replace(".js", ".json");
    if (!fs.existsSync(controllerDefFile)) {
      console.error(
        `Hook controller definition file ${controllerDefFile} does not exist`
      );
      process.exit(1);
    }
    const controllerDef = JSON.parse(
      fs.readFileSync(controllerDefFile, "utf-8")
    );
    const hookDef: Partial<Hook> = {
      name: hook.name,
      entryPoint: `${HOOKS_FOLDER}/${hook.name}.js`,
      schedule: hook.schedule
        ? ({
            rrule: hook.schedule,
          } as any)
        : undefined,
      requiredClasses: [...controllerDef.inputs, ...controllerDef.outputs],
    };
    const hookCode = generateHookCode(controllerDef, hook);
    fs.writeFileSync(
      path.join(hookDefsPath, `${hook.name}.json`),
      JSON.stringify(hookDef, null, 2)
    );
    fs.writeFileSync(path.join(basePath, `${hook.name}.js`), hookCode);
  }
}

function generateHookCode(
  def: { inputs: string[]; outputs: string[] },
  hook: { controller: string }
) {
  return `const NormalSdk = require("@normalframework/applications-sdk");
const controller = require("../${HOOKS_LIB}/${hook.controller}");
const instance = controller();

/**
 * Invoke hook function
 * @param {NormalSdk.InvokeParams} params
 * @returns {NormalSdk.InvokeResult}
 */

module.exports = async ({points}) => {
  const ${generateJsObjectParameter(def.outputs)} = instance(
    {
      ${def.inputs
        .map((i) => `${i}: points.byLabel('${i}').first()?.latestValue?.value`)
        .join(",\n\t\t\t")}
    }
  );

  await Promise.all([
    ${def.outputs
      .map((o) => `points.byLabel('${o}').first()?.write({value: ${o}})`)
      .join(",\n\t\t")}
  ]);
};`;
}

export async function createNewGitRepo(folder: string) {
  const git = simpleGit(folder);
  await git.init();
  await git.add(".");
  await git.commit("Initial commit");
}
