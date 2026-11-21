// SPDX-License-Identifier: MIT
// Make the AI judge feel brave — make.fun bounty
// make-the-ai-judge-feel-brave-20261121-0302
//
// Writes one short, original text to /output/entry.txt.
// Deterministic: no input, no randomness, no network, no model calls.
// The text is a fixed string, written byte-identically on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "On the back step, she shells peas into a tin bowl, one soft tick at a time. " +
  "The afternoon has nowhere else to be. Neither do you. " +
  "The bowl fills, the light thins, and the small work is enough — it was always enough.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
