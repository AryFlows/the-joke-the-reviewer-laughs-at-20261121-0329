# The Joke the Reviewer Laughs At

[![make.fun](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/AryFlows/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/AryFlows/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

A make.fun entry: a program that writes one one-line joke about working beside
AI coding agents to `/output/entry.txt`.

## The joke

> My agent renamed every variable, refactored every function, and left the bug
> exactly where it found it.

## Run

```sh
node main.ts
```

`main.ts` (Node 22) writes the joke to `/output/entry.txt` (override the
directory with `OUTPUT_DIR`). No network, no dependencies. The entry is
validated before writing: 1–280 Unicode code points, not only whitespace.
