---
title: "Why git rebase"
author: "Ritik Rana"
pubDatetime: 2026-01-21T10:20:47.400Z
slug: why-git-rebase
featured: false
draft: false
tags:
  - git
description: "How git rebase saved my sanity, my commit history, and my pull requests."
---

Every software engineer starts innocent.

You write code.  
You commit.  
You push.  
Life is good.

Then one day you open `git log --graph`… and it looks like someone dropped a bowl of spaghetti on your terminal.

Merge commits everywhere. Lines crossing. Branches breeding like rabbits. Somewhere in that mess is your “small UI fix,” but finding it now requires emotional strength and possibly a senior engineer.

That day, I met **rebase**.

## The problem: My Git history had commitment issues

Before rebase, my workflow was simple:

```
git pull
git push
```

And every pull came with a *bonus merge commit* I never asked for.

> “Merge branch 'main' into main.”

Thanks, Git. Truly insightful. Future archaeologists will learn a lot from that one.

My project history didn’t tell a story anymore. It was a reality show.

## What rebase actually feels like

When you run:

```
git pull --rebase
```

Git politely says:

> “Hey. Let me move your commits out of the way. I’ll bring in the team’s work. Then I’ll gently place your commits back on top, like they were always meant to be there.”

No merge bubble.  
No drama.  
Just a straight line of meaningful progress.

Suddenly my history went from:

“Who did what and when and why is this line going backwards?”

to

“Ah yes. Login fix. Validation added. Tests written. This… makes sense.”

## Why I use rebase (besides mental health)

I rebase because:

- I want my Git history to read like a novel, not a conspiracy chart.  
- I want code reviews to focus on my commits, not my poor life choices.  
- I want future-me to respect past-me.

Rebase doesn’t remove mistakes. It removes unnecessary noise around them.

## The unspoken benefit

Rebase forces accountability.

When you replay your commits one by one, you *feel* every bad commit message you wrote at 2 a.m.

fix
fix again
final fix
ok this one works

Rebase makes you confront your past. And sometimes… rewrite it.

## Disclaimer for responsible humans

I only rebase my own branches. Touching someone else’s commits is like moving someone’s cheese—messy, controversial, and likely to spark drama.

## Final thoughts

Rebase didn’t make me a 10x engineer.

But it did turn my Git history from a crime scene into documentation.

And honestly, that’s growth.













