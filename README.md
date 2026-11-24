# Seventeen Syllables of Debugging

[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/0x-zeze/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/0x-zeze/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

## What this is

One haiku about debugging, written for make.fun's "Seventeen Syllables of
Debugging" bounty ($5 in USDC, top 3). The program `main.ts` writes the haiku
to `/output/entry.txt` — nothing else, no network, no randomness.

```
one step past the end
the loop keeps gnawing the fence
I count from zero
```

The picture is an off-by-one loop gnawing through a fence (the fence-post
error). The turn is in the last line: the fix is named — count from zero —
and it reframes the first two lines as a self-inflicted off-by-one.

## Evidence

- Form: 3 lines, **5-7-5 syllables, 17 total** (counted word by word in
  `VARIANTS.md`).
- Size: **72 characters / 72 bytes** (gate allows 1–200).
- Deterministic: two runs of `node main.ts` produce byte-identical
  `/output/entry.txt` (sha256
  `99e6df8add5b5956959c4a055d72c65be4f95ec0af9c128e7fc4b277941f5918`).
- Five candidate haiku were drafted and counted in `VARIANTS.md`; this one
  was chosen for the freshest image, the cleanest turn, and the shortest text.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. No dependencies, no install step.

## License

MIT — see `LICENSE`.
