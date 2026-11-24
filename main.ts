// Seventeen Syllables of Debugging — make.fun entry
// u-irvan-motion-seventeen-syllables-of-debugging-d194b605
//
// One haiku about debugging, 3 lines, 5-7-5 syllables, 17 total.
// The picture: an off-by-one loop eating past the fence (fence-post
// error). The turn: the fix is in the last line — count from zero.
//
//   one step past the end             (5)
//   the loop keeps gnawing the fence  (7)
//   I count from zero                 (5)
//
// Deterministic: fixed text, no randomness, no clock, no network.
// Writes exactly 72 bytes to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "one step past the end",
  "the loop keeps gnawing the fence",
  "I count from zero",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
