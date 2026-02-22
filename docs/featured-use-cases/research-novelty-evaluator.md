---
sidebar_position: 5
---

# Research Novelty Evaluator

Find out if your research idea is truly new — before you spend months on it.

---

## What It Does

This agent evaluates PhD research ideas against existing literature to assess novelty. It breaks your idea into components, searches for similar work, and tells you exactly where your contribution overlaps or diverges from what already exists.

- **Component-level analysis** — decomposes your idea into question, assumptions, method, and evaluation
- **Literature comparison** — searches academic databases for papers addressing similar problems
- **Overlap mapping** — shows precisely where your idea matches or differs from prior work
- **Novelty classification** — rates your idea as *largely redundant*, *incrementally new*, or *clearly distinct*
- **Actionable feedback** — explains whether the novelty comes from the question, the method, or the framing

---

## The Story: Preventing Wasted PhD Years

### The Prompt

```
Build a Research Project "Grading" Agent.

What: An agent that evaluates early-stage PhD research ideas
by checking how new they actually are compared to existing work.

Problem: Students usually judge novelty through incomplete literature
reviews or advisor intuition, and only find out a project is
"too incremental" after months of work or at peer review.

Why this matters: Time is often wasted on projects that are solid
but not meaningfully different from what already exists —
leading to weak submissions and rejections.

Competitors: Tools like Google NotebookLM help find and summarize
papers but do not evaluate whether a proposed research idea is
distinct at the "contribution" level.

How MorphMind separates:
- Breaks the research idea into plain components: what question
  is being asked, what assumptions are being made, what is being
  changed or introduced, and how results will be evaluated.
- Compares each component directly to how similar questions have
  been handled in prior literature, instead of relying on keyword
  or topic similarity.
- Shows exactly where the idea overlaps with existing work and
  where it differs, making it clear whether the novelty comes from
  the question, the method, the framing, or not at all.
- Produces a simple, interpretable output (e.g., largely redundant
  / incrementally new / clearly distinct) with specific reasons
  for the classification.
```

### What MorphMind Built

A 4-step evaluation pipeline:

1. **Parse Research Idea** — extract the core components: research question, assumptions, proposed method, and evaluation criteria
2. **Search Prior Work** — find papers addressing similar questions or using similar methods across academic databases and arXiv preprints
3. **Compare Components** — map overlap between the idea and each retrieved paper at the component level (question vs. question, method vs. method), generating a comparison table and visual overlap map
4. **Classify Novelty** — determine the novelty level with specific reasoning, citing which papers overlap and where

### Output

The agent produces:
- `report.pdf` — full novelty assessment with reasoning
- `overlap_map.png` — visual map of where the idea overlaps with prior work
- `comparison_table.csv` — structured comparison against each retrieved paper

---

## Why This Matters

**PhD students shouldn't discover their idea isn't novel at peer review.** The typical path — incomplete literature review, advisor gut-check, months of work, then rejection for being "incremental" — wastes the most valuable resource in academia: time.

| Existing Tools | This Agent |
|----------------|-----------|
| Google Scholar / NotebookLM: find and summarize papers | Evaluates whether your *specific contribution* is distinct |
| Keyword-based similarity | Component-level comparison (question, method, evaluation) |
| "Related work" = list of papers | Shows *exactly* where overlap exists and where it doesn't |
| No verdict | Clear classification: redundant / incremental / distinct |

---

## Getting Started

[**Open Research Novelty Evaluator →**](https://agentlab.morphmind.ai/shared/kwecft6a)

### Quick Actions

| Action | What It Does |
|--------|-------------|
| **Evaluate research idea** | Describe your idea and get a novelty assessment |
| **Check proposal document** | Upload a research proposal PDF for evaluation |

### Example Prompts

```
Evaluate this research idea:
I want to use causal inference frameworks to improve sample efficiency
in vision-language-action models for robotic manipulation.
The key insight is that causal structure can reduce the data needed
for policy learning.
```

```
My PhD proposal is about using graph neural networks for drug-drug
interaction prediction. The novelty is combining molecular fingerprints
with patient-level EHR features. How new is this?
```

```
I'm proposing a new method for single-cell trajectory inference
that uses optimal transport instead of graph-based approaches.
Is this distinct enough from existing work?
```

---

## How It Evaluates

The agent doesn't just search for keywords — it reasons about contributions at the component level:

```
Your Research Idea
       │
       ▼
┌──────────────────────┐
│ Parse Research Idea    │  Extract: question, assumptions,
│                        │  method, evaluation criteria
└──────────┬─────────────┘
           │
           ▼
┌──────────────────────┐
│ Search Prior Work      │  Find papers with similar questions
│                        │  or methods (academic DBs + arXiv)
└──────────┬─────────────┘
           │
           ▼
┌──────────────────────┐
│ Compare Components     │  Map overlap: your question vs theirs,
│                        │  your method vs theirs (table + visual)
└──────────┬─────────────┘
           │
           ▼
┌──────────────────────┐
│ Classify Novelty       │  Verdict: redundant / incremental / distinct
│                        │  with specific reasons and citations
└──────────────────────┘
```

---

## Key Takeaway

> **Describe the problem your users face and how you want to solve it differently.** The prompt for this agent was a product-style problem statement — not code or technical specs. MorphMind turned a clear description of the *what* and *why* into a working evaluation pipeline with literature search, component analysis, and visual overlap mapping.
