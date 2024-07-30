import { Command } from "commander";
import { existsSync, stat, statSync } from "fs";
import { translateDirectory, translateFile } from "./translator";
import {
  translateDirectory as translateDirectoryGpt,
  translateFile as translateFileGpt,
} from "./gpt";

const program = new Command();

async function translate(
  input: string,
  translator: {
    dir: () => void | Promise<void>;
    file: () => void | Promise<void>;
  }
) {
  if (!existsSync(input)) {
    console.error("Input file or directory does not exist");
    process.exit(1);
  }

  const inputStat = statSync(input);

  if (inputStat.isDirectory()) {
    await translator.dir();
  } else {
    await translator.file();
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
    output = output || __dirname;

    await translate(input, {
      dir: () => translateDirectory(input, output, { visualize }),
      file: () => translateFile(input, output, { visualize }),
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
    output = output || __dirname;

    await translate(input, {
      dir: () => translateDirectoryGpt(input, output),
      file: () => translateFileGpt(input, output),
    });
  });

program.parse(process.argv);
