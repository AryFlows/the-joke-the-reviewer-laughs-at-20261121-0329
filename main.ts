import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent renamed every variable, refactored every function, and left the bug exactly where it found it.";

function assertValidEntry(text: string): void {
  const points = [...text].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry must be 1-280 code points, got ${points}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

const outDir = process.env.OUTPUT_DIR ?? "/output";

assertValidEntry(JOKE);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
