import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — a single hilarious line, at most 200 characters.
// The joke: a standing desk bought for health, defeated by a taller chair.
const ENTRY =
  "I bought a standing desk to be healthier. Now I just sit on a taller chair.";

// Gate: 1 to 200 characters. Fail loudly rather than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
