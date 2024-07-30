import { Command } from "commander";
import { existsSync, stat, statSync } from "fs";
import { translateDirectory, translateFile } from "./translator";
import {
  translateDirectory as translateDirectoryGpt,
  translateFile as translateFileGpt,
} from "./gpt";
import path from "path";

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
  .command("translate")
  .requiredOption(
    "-i, --input <input>",
    "Modelica file or directory to translate"
  )
  .option("-o, --output <output>", "Output file")
  .option("-v, --visualize", "Visualize the execution graph")
  .description("Translate modelica files")
  .action(async ({ input, output, visualize }) => {
    output = output ?? process.cwd();

    await translate(input, output, {
      dir: (input, output) => translateDirectory(input, output, { visualize }),
      file: (input, output) => translateFile(input, output, { visualize }),
    });
  });

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

program.parse(process.argv);
