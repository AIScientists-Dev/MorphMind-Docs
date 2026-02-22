---
sidebar_position: 3
---

# Single-Cell Analysis Copilot

Ask questions about your scRNA-seq data — without managing pipelines.

---

## What It Does

This agent automates single-cell RNA-seq analysis end-to-end, using Scanpy as the core engine. Upload your data, ask biological questions, and get publication-ready results.

- **Automated QC & normalization** — filters dead cells, normalizes counts, selects highly variable genes
- **Intelligent batch correction** — only applies correction when batch effects are detected and biologically inappropriate
- **Cell type annotation** — hypothesis-driven annotation using marker genes and literature evidence
- **Trajectory analysis** — pseudotime ordering to trace cell state transitions
- **Visualization** — UMAP, PCA, heatmaps, and marker gene plots

---

## The Story: One Prompt, Full Analytical Workflow

### The Prompt

```
I want to build a single-cell RNA-seq analysis copilot.
Walks through the full analytical workflow — QC, clustering,
annotation, differential expression.

Scanpy, celltypist, decoupler may be relevant, prepare
environment first. Let's validate on PBMC 3k as a test case —
it's small and well-understood, good for making sure each step
works before running real data.

Every step should produce a figure.
```

### What MorphMind Built

From this single prompt, the platform created a multi-step pipeline — and validated it end-to-end on the PBMC 3k dataset:

1. **Data ingestion** — load count matrices and cell metadata
2. **Quality control** — filter cells by mitochondrial content, gene counts, doublet detection
3. **Normalization & feature selection** — log-normalization, highly variable gene identification
4. **Batch correction** *(conditional)* — only when batch effects are detected and biologically inappropriate
5. **Dimensionality reduction** — PCA followed by UMAP embedding
6. **Clustering** — Leiden community detection with resolution tuning
7. **Cell type annotation** — marker-based annotation with literature citations
8. **Trajectory analysis** — pseudotime and lineage inference

Every step produces a figure — QC violin plots, UMAP embeddings, marker heatmaps, trajectory plots — so you always see what happened and why.

---

## Why This Matters

**This is not an AI wrapper around Scanpy.** Most "AI for biology" tools put a chatbot on top of existing packages — you still get a static pipeline with fixed parameters and no ability to adapt.

MorphMind agents are fundamentally different because they are **teachable and self-correcting**. You can chat with the agent to set rules that govern how it behaves — and those rules persist across runs:

- **Dynamic feedback loops** — tell the agent "if the silhouette score after clustering is below 0.3, go back and adjust the resolution parameter automatically." It will. Every time.
- **Conversational rule-setting** — say "always use Leiden over Louvain" or "flag any cluster with fewer than 50 cells for manual review." The agent remembers and follows these preferences.
- **Lifelong learning** — MorphMind develops the underlying technology so that researchers don't have to become software engineers. The agent accumulates domain knowledge from your interactions and improves over time — your lab's best practices become the agent's defaults.

| Static Pipeline Tools | MorphMind Copilot |
|-----------------------|-------------------|
| Fixed parameters, rerun manually | Self-correcting: adjusts parameters based on quality metrics |
| One-size-fits-all workflow | Teachable: you set the rules through conversation |
| Knowledge lives in one person's notebook | Lifelong learning: your lab's practices persist in the agent |
| Wrap existing packages with a chat UI | Autonomous reasoning: plans, executes, and validates each step |

---

## Getting Started

### Example Prompts

```
Upload my 10X Genomics count matrix and metadata.
What cell types are present in this dataset?
```

```
Are there batch effects across my donors?
If so, correct them and re-cluster.
```

```
Show me the top marker genes for each cluster
and annotate the cell types.
```

```
How do cells transition from progenitor to mature state?
Run trajectory analysis.
```

---

## Addressing Hallucination

A common concern with AI in science: how do you trust the results? MorphMind uses **multi-agent verification** — a separate validation agent reviews the primary agent's outputs, cross-checks citations against source databases, and flags any claims that can't be traced to evidence. The methods summary cites real papers with verifiable DOIs, not fabricated references.

---

## Key Takeaway

> **Describe your analysis workflow in plain language and the agent builds itself — then keeps learning from you.** MorphMind agents aren't wrappers. They reason, self-correct, and accumulate your domain expertise over time, so your lab's best practices scale beyond any single person.
