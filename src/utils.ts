import * as fs from "fs";
import * as path from "path";

export function* walkDirectoryRecursive(dir: string): Iterable<string> {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      yield* walkDirectoryRecursive(fullPath);
    } else {
      yield fullPath;
    }
  }
}
