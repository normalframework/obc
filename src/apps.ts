import {
  Application,
  HookSchema,
} from "@buf/normalframework_nf.bufbuild_es/normalgw/automation/v1/program_pb";
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
import { create, toJsonString } from "@bufbuild/protobuf";

const REPO =
  "https://github.com/normalframework/applications-template-empty.git";
const HOOKS_LIB = "lib";
const HOOKS_FOLDER = "hooks";
const HOOK_DEFS_FOLDER = "hooks-update";

const hookSchema = z.object({
  name: z.string(),
  controller: z.string(),
  interval: z.number(),
  parameters: z.record(z.string(), z.any()).optional(),
});

const configSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  hooks: z.array(hookSchema).optional(),
});

type HookDef = z.infer<typeof hookSchema>;
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

function copyDir(src: string, dest: string): void {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
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

  const isNew = res.override == null;

  if (res.override === false) {
    console.error("Output folder already exists");
    process.exit(1);
  }

  if (isNew) {
    await cloneApp(outputFolder);
  }

  copyDir(inputFolder, path.join(outputFolder, HOOKS_LIB));

  createAppDef(appConfig, outputFolder);
  await createHooks(appConfig, outputFolder);
  if (isNew) {
    fs.rmdirSync(path.join(outputFolder, ".git"), { recursive: true });
    await createNewGitRepo(outputFolder);
  } else {
    await updateGitRepo(outputFolder);
  }
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

    const hookDef = create(HookSchema, {
      name: hook.name,
      entryPoint: `${HOOKS_FOLDER}/${hook.name}.js`,
      schedule: {
        rrule: `RRULE:FREQ=SECONDLY;INTERVAL=${hook.interval}`,
      },
    });
    const hookCode = generateHookCode(controllerDef, hook);
    fs.writeFileSync(
      path.join(hookDefsPath, `${hook.name}.json`),
      toJsonString(HookSchema, hookDef)
    );
    fs.writeFileSync(path.join(basePath, `${hook.name}.js`), hookCode);
  }
}

function generateHookCode(
  def: { inputs: string[]; outputs: string[] },
  hook: HookDef
) {
  const parameters = hook.parameters ?? {};
  return `const NormalSdk = require("@normalframework/applications-sdk");
const controller = require("../${HOOKS_LIB}/${hook.controller}");
const TimeManager = require("../${HOOKS_LIB}/TimeManager");
const instance = controller(${generateJsObject(Object.entries(parameters))});

const EPSILON = 1e-6;

/**
 * Normalize value to 0 if it is close to 0
 * @param {number} value
 * @returns {number}
 */
function normalize(value) {
  if (!value || isNaN(value)) {
    return 0;
  }
  if (value < EPSILON) {
    return 0;
  }
  return value;
}

/**
 * Invoke hook function
 * @param {NormalSdk.InvokeParams} params
 * @returns {NormalSdk.InvokeResult}
 */
module.exports = async ({points}) => {
  const read = async (label) => {
    const point = points.byLabel(label).first();
    if (!point) {
      return 0;
    }
    const [value] = await point.read();
    return normalize(value?.value?.real);
  };

  const write = async (label, value) => {
    const point = points.byLabel(label).first();
    if (!point) {
      return;
    }
    await point.write(value);
  };

  const params = {
    ${def.inputs
      .map((i) => `${i}: await read('${i}')`)
      .join(",\n\t\t")}
  };
  const ${generateJsObjectParameter(def.outputs)} = instance(params);

  await Promise.all([
    ${def.outputs
      .map(
        (o) => `await write('${o}', normalize(${o}))`
      )
      .join(",\n\t\t")}
  ]);

  TimeManager.advance(${hook.interval});
};`;
}

export async function createNewGitRepo(folder: string) {
  const git = simpleGit(folder);
  await git.init();
  await git.add(".");
  await git.commit("Initial commit");
}

export async function updateGitRepo(folder: string) {
  const git = simpleGit(folder);
  await git.add(".");
  await git.commit("Update app at " + new Date().toISOString());
}
