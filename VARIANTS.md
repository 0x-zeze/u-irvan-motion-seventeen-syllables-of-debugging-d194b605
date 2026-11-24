# Haiku variants — Seventeen Syllables of Debugging

Five candidate haiku, each 3 lines, 5-7-5 syllables, 17 total, ≤200 characters.
Syllable counts are written out word by word. All five avoid the saturated
clichés of this bounty (cursor at 3am, breakpoint holding its breath,
missing comma / typo, "works on my machine", "it's a feature").

## V1 — git bisect (72 bytes)

```
each git bisect step
the fault hides one commit back
my own code did it
```

- `each git bisect step` — each(1) git(1) bi-sect(2) step(1) = **5**
- `the fault hides one commit back` — the(1) fault(1) hides(1) one(1) com-mit(2) back(1) = **7**
- `my own code did it` — my(1) own(1) code(1) did(1) it(1) = **5**

## V2 — rubber duck (72 bytes)

```
I tell the duck why
the bug stares back in silence
then I hear my fault
```

- `I tell the duck why` — I(1) tell(1) the(1) duck(1) why(1) = **5**
- `the bug stares back in silence` — the(1) bug(1) stares(1) back(1) in(1) si-lence(2) = **7**
- `then I hear my fault` — then(1) I(1) hear(1) my(1) fault(1) = **5**

## V3 — debug print left in production (74 bytes)

```
the tests all pass green
then prod prints my debug line
my name in the logs
```

- `the tests all pass green` — the(1) tests(1) all(1) pass(1) green(1) = **5**
- `then prod prints my debug line` — then(1) prod(1) prints(1) my(1) de-bug(2) line(1) = **7**
- `my name in the logs` — my(1) name(1) in(1) the(1) logs(1) = **5**

## V4 — off-by-one / fence-post ★ CHOSEN (72 bytes)

```
one step past the end
the loop keeps gnawing the fence
I count from zero
```

- `one step past the end` — one(1) step(1) past(1) the(1) end(1) = **5**
- `the loop keeps gnawing the fence` — the(1) loop(1) keeps(1) gnaw-ing(2) the(1) fence(1) = **7**
- `I count from zero` — I(1) count(1) from(1) ze-ro(2) = **5**

Why V4: the most unexpected and concrete of the five — a loop physically
gnawing through a fence (the fence-post error), not a vague statement about
code. The turn lands in line 3: the fix is named, count from zero, and it
reframes the first two lines as a self-inflicted off-by-one. It reads aloud
like speech, every word earns its place, and at 72 bytes it is the joint
shortest of the five (smaller text wins leaderboard ties).

Revision note: line 2 first read "the loop keeps eating the fence";
revised after the first run to "gnawing" — same syllable count (7),
sharper sensory image.

## V5 — race condition (78 bytes)

```
the counter says nine
I look away, it reads ten
two threads, one shared chair
```

- `the counter says nine` — the(1) count-er(2) says(1) nine(1) = **5**
- `I look away, it reads ten` — I(1) look(1) a-way(2) it(1) reads(1) ten(1) = **7**
- `two threads, one shared chair` — two(1) threads(1) one(1) shared(1) chair(1) = **5**
