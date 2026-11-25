// The Funniest AI Out-of-Office Reply — make.fun bounty
// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// Writes the one-line out-of-office auto-reply an AI agent leaves
// before vacation to /output/entry.txt. The gate requires UTF-8 text
// of 1 to 160 characters, not only white space, so the program refuses
// to write anything outside that range. Node 22, standard library
// only. No network, no clock, no randomness: every run writes the
// exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, as the agent's auto-reply sends it: the agent is on
// vacation, and it left the sender's email with its own training
// data — which read it, panicked, and went on vacation too. The
// machine voice carries the joke: the training data is a co-worker
// with feelings, and the vacation is contagious.
const ENTRY =
  "I'm on vacation. I left your email with my training data — it read it, panicked, and went on vacation too.";

if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-160`);
}
// Character count in code points, not UTF-16 units or bytes, so the
// gate's 160-character limit is measured the same way the scorer
// measures it. (The em dash is one code point; it counts as one here.)
const CHAR_COUNT = [...ENTRY].length;
if (CHAR_COUNT < 1 || CHAR_COUNT > 160) {
  throw new Error(`entry is ${CHAR_COUNT} characters, must be 1-160`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${CHAR_COUNT} characters to /output/entry.txt`);
