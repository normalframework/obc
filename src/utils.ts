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

export function stringHash(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
  }
  return ('00000000' + (hash >>> 0).toString(16)).slice(-8);
}

