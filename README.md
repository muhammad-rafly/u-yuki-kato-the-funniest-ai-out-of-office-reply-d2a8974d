# The Funniest AI Out-of-Office Reply

[![make.fun bounty](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/muhammad-rafly/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/muhammad-rafly/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

One line of text: the out-of-office auto-reply an AI agent leaves before
vacation, built for the [make.fun The Funniest AI Out-of-Office Reply bounty](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d).

## The line

> I'm on vacation. I left your email with my training data — it read it, panicked, and went on vacation too.

The joke: the agent did not just leave — it delegated to its own training
data, and the training data turned out to be a co-worker with feelings. It
read the sender's email, panicked, and went on vacation too, so the vacation
is contagious and nobody is actually minding the office. The machine voice
carries the punchline, and the line still reads like a real auto-reply
someone would receive: one clean sentence pair, no beach, no inbox, no
"back soon".

## How it is made

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt` and refuses to write anything outside the gate's
1–160 character range (106 characters, counted in code points) or
anything that is not a single line. No network,
no clock, no randomness — two runs produce byte-identical output.
