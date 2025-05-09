import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

export async function runExpriment({
  input,
  output,
  duration,
  start,
}: {
  input: string;
  duration: number;
  start?: number;
  output?: string;
}) {
  const STEPS = 1000;
  const timeManagerPath = join(process.cwd(), "out", "TimeManager.js");
  const TimeManager = await import(timeManagerPath).then((m) => m.default);

  if (start !== undefined) {
    TimeManager.reset(start);
  }

  const validatePath = join(process.cwd(), input);
  const validate = await import(validatePath);
  const validateInstance = validate.default();

  const interval = duration / STEPS;

  // Get all unique nested keys from first result to build CSV header
  const headers: string[] = [];

  function extractKeys(obj: any, prefix = "") {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === "object") {
        for (const [subKey] of Object.entries(value)) {
          headers.push(`${prefix}${key}.${subKey}`);
        }
      }
    }
  }

  // Build CSV rows
  const rows: string[] = [];
  for (let i = 0; i < STEPS; i++) {
    const res = validateInstance({});
    if (!headers.length) {
      extractKeys(res);
      rows.push(["time", ...headers].join(","));
    }
    const row = [TimeManager.time.toFixed(3)];
    for (const header of headers) {
      const [obj, prop] = header.split(".");
      const value = res[obj][prop];
      if (typeof value === "boolean") {
        row.push(value ? 1 : 0);
      } else if (typeof value === "number") {
        row.push(value.toFixed(4));
      } else {
        row.push(value);
      }
    }
    rows.push(row.join(","));
    TimeManager.advance(interval);
  }

  const dir = output ?? join(process.cwd(), "validation");
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  const outPath = join(dir, `${basename(input).replace(".js", "")}.csv`);
  writeFileSync(outPath, rows.join("\n"), "utf8");
  console.log(`Wrote validation results to ${outPath}`);
}
