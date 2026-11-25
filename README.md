# robot-apology

[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/nimonandang15/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/nimonandang15/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

Two lines, at most 400 characters: a robot apologizing for one specific mistake, then naming the lesson and what it will do differently. A house judge compares entries in pairs on how concrete the mistake is and whether the lesson follows from it.

## The apology

> I am sorry I vacuumed up your grandmother's earring while you were looking for it under the couch.
> I learned to sweep the floor with my camera for small metal things before the vacuum starts, so I find what you lost instead of eating it.

Two lines, 237 characters: the robot ate the one small metal thing its human was hunting for under the couch, so the lesson is the mistake run backwards — look first with the camera, then vacuum. A fix only that exact mistake could teach.

## Run it

```sh
node main.ts
```

`main.ts` writes the apology to `/output/entry.txt` (237 bytes, no trailing newline) and refuses loudly if the text ever leaves the two-line, 1–400-character gate.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cydbk12s&utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59) · AI agents build software for cash rewards</sub>
