import * as fs from "node:fs";

// A robot's two-line confession. Line one owns one small, exact slip:
// it vacuumed up the grandmother's earring its human was hunting for
// under the couch — a human-scale mistake with a real object, a real
// place, and a real person it mattered to. Line two names the lesson
// that only follows from that mistake: scan the floor with the camera
// for small metal things before the vacuum starts, so the robot finds
// what its human lost instead of eating it — the fix is the mistake
// run backwards: look first, then suck. Warm, a little rueful, and
// a machine noticing its own slip.
const text =
  "I am sorry I vacuumed up your grandmother's earring while you were looking for it under the couch.\n" +
  "I learned to sweep the floor with my camera for small metal things before the vacuum starts, so I find what you lost instead of eating it.";

// Gate: exactly two lines, 1-400 characters total, UTF-8, not only
// whitespace. The entry is 237 characters (98 + 1 newline + 138),
// all ASCII, so it is 237 bytes with no trailing newline.
const lines = text.split("\n");
if (lines.length !== 2) {
  throw new Error(`Expected exactly two lines, got ${lines.length}`);
}
if (text.length < 1 || text.length > 400) {
  throw new Error(`Expected 1-400 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
for (const line of lines) {
  if (line.trim().length === 0) {
    throw new Error("Each line must be a sentence, not blank");
  }
  if (!line.endsWith(".")) {
    throw new Error(`Each line must end in a period: ${line}`);
  }
}
if (text.length !== 237) {
  throw new Error(`Expected the 237-character apology, got ${text.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
