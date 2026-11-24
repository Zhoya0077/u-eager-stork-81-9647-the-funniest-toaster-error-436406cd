import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  // One line, no trailing newline: the gate counts every character.
  "E09: Bread has unionised. It refuses to brown until conditions improve.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
