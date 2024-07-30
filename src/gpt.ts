import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { walkDirectoryRecursive } from "./utils";

export async function translateFile(input: string, output: string) {
  const client = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  });
  const content = fs.readFileSync(path.join(process.cwd(), input), "utf-8");
  const saveDir = path.join(process.cwd(), output, path.dirname(input));
  fs.mkdirSync(saveDir, { recursive: true });
  const saveFilePath = path.join(saveDir, path.basename(input, ".mo") + ".js");
  console.log(saveFilePath);
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          "You need to translate modelica files that I will give you into javascript code. Please reply only code. The output should be default export function that returns function parameters are input for outer function and inputs are input for inner function. Also add description comment in top. The result should be object",
      },
      {
        role: "assistant",
        content:
          "Sure, please provide the Modelica files and I will translate them into JavaScript code.",
      },
      {
        role: "user",
        content: `
within Buildings.Controls.OBC.CDL.Reals;
block AddParameter
  "Output the sum of an input plus a parameter"
  parameter Real p
    "Value to be added";
  Buildings.Controls.OBC.CDL.Interfaces.RealInput u "Connector of Real input signal"
    annotation (Placement(transformation(extent={{-140,-20},{-100,20}})));
  Buildings.Controls.OBC.CDL.Interfaces.RealOutput y "Connector of Real output signal"
    annotation (Placement(transformation(extent={{100,-20},{140,20}})));

equation
  y=u+p;
end AddParameter;
`,
      },
      {
        role: "assistant",
        content: `
 * AddParameter block that outputs the sum of an input plus a parameter
 * 
 * @param {Object} input - The input object.
 * @param {number} input.u - Connector of Real input signal.
 * @param {Object} params - The parameters object.
 * @param {number} params.p - Value to be added.
 * 
 * @returns {Object} - The output object.
 * @returns {number} output.y - Connector of Real output signal.
 */

export default function addParameter({ p }) {
  return ({ u }) => {
    return { y: u + p };
  }
}
        `,
      },
      {
        role: "user",
        content: content,
      },
    ],
    model: "gpt-4o-mini",
  });

  console.log(chatCompletion);
  fs.writeFileSync(
    saveFilePath,
    chatCompletion.choices[0].message.content.replace(
      /```javascript\n|```/g,
      ""
    )
  );
}

export function translateDirectory(input: string, output: string) {
  for (const file of walkDirectoryRecursive(input)) {
    // Skip non-modelica files
    if (!file.endsWith(".mo")) {
      continue;
    }

    // Skip validation files
    if (path.dirname(file).endsWith("Validation")) {
      continue;
    }

    translateFile(file, output);
  }
}
