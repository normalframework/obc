import { Command } from "commander";
import { existsSync, statSync } from "fs";
import path from "path";
import { generateApp } from "./apps";
import {
  translateDirectory as translateDirectoryGpt,
  translateFile as translateFileGpt,
} from "./gpt";
import { translateDirectory, translateFile } from "./translator";
import { runExpriment } from "./expriment";

process.setMaxListeners(0);

const program = new Command();

async function translate(
  input: string,
  output: string,
  translator: {
    dir: (input: string, output: string) => void | Promise<void>;
    file: (input: string, output: string) => void | Promise<void>;
  }
) {
  if (!existsSync(input)) {
    console.error("Input file or directory does not exist");
    process.exit(1);
  }

  const inputStat = statSync(input);

  if (inputStat.isDirectory()) {
    await translator.dir(input, output);
  } else {
    const fileName = path.basename(input);
    const ext = path.extname(fileName);
    const fileOutput = path.join(output, fileName.replace(ext, ".js"));
    await translator.file(input, fileOutput);
  }
}

program
  .command("app")
  .option("-i, --input <input>", "Modelica  directory to translate")
  .option("-o, --output <output>", "Output app folder")
  .option("-c, --config <config>", "App config file")
  .option("--name <name>", "App name")
  .option("--description <description>", "App Description")
  .description("Generate installable app repository")
  .action(async (params) => {
    await generateApp(params);
  });

program
  .command("translate")
  .requiredOption(
    "-i, --input <input>",
    "Modelica file or directory to translate"
  )
  .option("-o, --output <output>", "Output file")
  .option("-v, --visualize", "Visualize the execution graph")
  .option("--rebuild-modelica", "Rebuild modelica files")
  .option("--validation", "Generate validation files")
  .option("-g, --graph <graph>", "Visualize graph file path")
  .description("Translate modelica files")
  .action(
    async ({
      input,
      output,
      visualize,
      graph,
      rebuildModelica,
      validation,
    }) => {
      output = output ?? process.cwd();
      await translate(input, output, {
        dir: (input, output) =>
          translateDirectory(input, output, {
            visualize: graph ?? visualize,
            rebuildModelica,
            validation,
          }),
        file: (input, output) =>
          translateFile(input, output, {
            visualize: graph ?? visualize,
            rebuildModelica,
            validation,
          }),
      });
    }
  );

program
  .command("gpt")
  .requiredOption(
    "-i, --input <input>",
    "Modelica file or directory to translate"
  )
  .option("-o, --output <output>", "Output file")
  .description("Translate modelica files using GPT")
  .action(async ({ input, output }) => {
    if (!process.env["OPENAI_API_KEY"]) {
      console.error("OPENAI_API_KEY is not set");
      process.exit(1);
    }
    output = output ?? process.cwd();

    await translate(input, output, {
      dir: (input, output) => translateDirectoryGpt(input, output),
      file: (input, output) => translateFileGpt(input, output),
    });
  });

program
  .command("expriment")
  .requiredOption("-i, --input <input>", "Input file")
  .requiredOption("-d, --duration <duration>", "Duration")
  .option("-o, --output <output>", "Output file")
  .option("-s, --start <start>", "Start time")
  .description("Run expriment")
  .action(async ({ input, output, duration, start }) => {
    await runExpriment({ input, output, duration, start });
  });
program.parse(process.argv);
