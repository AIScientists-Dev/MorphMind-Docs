---
sidebar_position: 1
---

# PDF Accessibility Remediator

Make your PDFs accessible to screen readers — in minutes, not hours.

---

## The Problem

PDF accessibility compliance is a growing requirement for universities, publishers, and organizations. But manual remediation is painfully slow:

- Adding alt-text to every image, chart, and equation
- Tagging headings, paragraphs, and reading order
- Validating against PDF/UA standards
- Fixing issues and re-validating

A single document can take **2-4 hours** to remediate manually.

---

## What This Agent Does

The PDF Accessibility Remediator automates the entire process:

| Feature | Description |
|---------|-------------|
| **AI Alt-Text Generation** | Uses vision AI to describe images, charts, and math formulas |
| **Semantic Structure** | Automatically tags headings, paragraphs, and reading order |
| **PDF/UA Validation** | Checks compliance and returns a 0-100 accessibility score |
| **PDF & LaTeX Support** | Works with compiled PDFs or LaTeX source files |

---

## Who It's For

- **Academic staff** — course materials, lecture slides, syllabi
- **Researchers** — papers and preprints for accessible journals
- **Disability services** — bulk remediation of institutional documents
- **Publishers** — compliance for digital publications

---

## How to Use It

### Step 1: Open the Agent

Navigate to [AgentLab](https://agentlab.morphmind.ai) and find the **PDF Accessibility Remediator** agent.

<img src={require('./screenshots/agent-card.png').default} alt="PDF Accessibility Remediator agent card" style={{maxWidth: '600px', width: '100%'}} />

---

### Step 2: Upload Your Document

Upload a PDF file or LaTeX source. The agent accepts:
- PDF files (original, not scanned images)
- LaTeX `.tex` files with associated figures

<img src={require('./screenshots/upload.png').default} alt="Upload interface" style={{maxWidth: '600px', width: '100%'}} />

---

### Step 3: Describe Your Document (Optional)

For better alt-text quality, tell the agent what type of document it is:
- "academic paper"
- "lecture slides"
- "technical report"
- "administrative document"

---

### Step 4: Review Results

The agent will:
1. Analyze your document structure
2. Generate alt-text for all figures and formulas
3. Add semantic tags (headings, paragraphs)
4. Validate against PDF/UA standard
5. Return an **accessibility score (0-100)**

<img src={require('./screenshots/results.png').default} alt="Accessibility score results" style={{maxWidth: '600px', width: '100%'}} />

---

### Step 5: Download Your Accessible PDF

Download the remediated PDF. It will include:
- Proper document structure tags
- Alt-text on all images and figures
- Reading order for screen readers
- PDF/UA metadata

<img src={require('./screenshots/download.png').default} alt="Download accessible PDF" style={{maxWidth: '600px', width: '100%'}} />

---

## Tips for Best Results

1. **Use original PDFs** — Scanned images won't have extractable text
2. **Specify document type** — Helps the AI generate more accurate alt-text
3. **For LaTeX** — Include figure files in the same upload or directory
4. **Review critical figures** — AI-generated alt-text is good but may need refinement for complex diagrams

---

## Example Conversation

> **You:** I have a research paper PDF that needs to be accessible for journal submission. Can you help?
>
> **Agent:** I'll analyze your PDF and make it accessible. Please upload the file.
>
> **You:** [uploads paper.pdf]
>
> **Agent:** I've processed your document. Here are the results:
> - **Accessibility Score: 87/100 (Grade: B+)**
> - 12 figures found — alt-text generated for all
> - 3 mathematical formulas described
> - Document structure tagged (H1, H2, paragraphs)
> - 2 links fixed with alt-text
>
> Download your accessible PDF here: [paper_accessible.pdf]

---

## Open Source

This agent is powered by an open-source tool. Self-host it or contribute:

[GitHub: AI-Powered-PDF-Accessibility](https://github.com/AIScientists-Dev/AI-Powered-PDF-Accessibility)

---

## Try It Now

Ready to make your PDFs accessible?

[**Open PDF Accessibility Remediator →**](https://agentlab.morphmind.ai)
