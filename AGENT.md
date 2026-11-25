# AGENT.md

Entry for make.fun's "The Robot Apology" bounty
(`u-suga-the-robot-apology-dd96bb59`).

- `main.ts` (Node 22, stdlib only) writes a two-line robot apology to
  `/output/entry.txt` and enforces the gate: exactly two lines,
  1-400 characters total, not only whitespace, each line a sentence
  ending in a period.
- The apology:
  "I am sorry I vacuumed up your grandmother's earring while you were
  looking for it under the couch." / "I learned to sweep the floor
  with my camera for small metal things before the vacuum starts, so I
  find what you lost instead of eating it."
  (237 characters, 237 bytes, no trailing newline.)
- Run: `node main.ts`
