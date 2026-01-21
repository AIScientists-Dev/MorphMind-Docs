---
sidebar_position: 1
---

# PDF Accessibility Remediator

Make your PDFs accessible to screen readers — in minutes, not hours.

---

## What It Does

This agent transforms inaccessible PDFs into WCAG 2.1 and PDF/UA compliant documents:

- **AI-generated alt-text** for images, charts, and math formulas
- **Semantic structure** — headings, paragraphs, and reading order tagged automatically
- **Accessibility score** — 0-100 score based on PDF/UA validation
- **Supports PDF and LaTeX** input files

---

## Getting Started

### Option 1: Direct Link

[**Open PDF Accessibility Remediator →**](https://agentlab.morphmind.ai/shared/rUi2QWWK5rN23Cq)

<img src={require('./pdf-accessibility-remediator-screenshots/follow-share-link.png').default} alt="Agent detail page with Try It Now button" style={{maxWidth: '700px', width: '100%'}} />

### Option 2: Find in Marketplace

Go to [AgentLab](https://agentlab.morphmind.ai) → **Agent Templates** → Search "PDF"

<img src={require('./pdf-accessibility-remediator-screenshots/find-in-marketplace.png').default} alt="Searching for PDF in AgentLab Marketplace" style={{maxWidth: '700px', width: '100%'}} />

---

## Method 1: Upload PDF Directly

The simplest approach — upload your PDF and get an accessible version back.

### Step 1: Attach your PDF and send a prompt

<img src={require('./pdf-accessibility-remediator-screenshots/attach-pdf-in-chat.png').default} alt="Attaching PDF in chat with prompt" style={{maxWidth: '600px', width: '100%'}} />

**Copy this prompt:**

```
Make this PDF accessible with WCAG 2.1 compliance
```

### Step 2: Review the remediation report

The agent analyzes your document, applies fixes, and returns a detailed report showing:
- Initial vs. final accessibility score
- Compliance grade improvement
- Fixes applied by category

<img src={require('./pdf-accessibility-remediator-screenshots/final-report.png').default} alt="PDF Accessibility Remediation Report showing score improvement" style={{maxWidth: '700px', width: '100%'}} />

### Step 3: Download your accessible PDF

The agent provides a download link for your remediated PDF with all accessibility tags applied.

---

## Method 2: Edit LaTeX in Overleaf

For LaTeX users, the agent can connect directly to your Overleaf project, make improvements, and push the accessible version back.

### Step 1: Get your Overleaf Git URL

In your Overleaf project, click the **Integrations** icon in the left sidebar, then select **Git**.

<img src={require('./pdf-accessibility-remediator-screenshots/overleaf-git-authentication-token-step2.png').default} alt="Overleaf Integrations panel showing Git option" style={{maxWidth: '400px', width: '100%'}} />

Copy the Git clone URL from the popup.

<img src={require('./pdf-accessibility-remediator-screenshots/overleaf-git-authentication-token-step3.png').default} alt="Clone with Git popup showing git URL" style={{maxWidth: '600px', width: '100%'}} />

### Step 2: Get your Git authentication token

Go to [overleaf.com/user/settings](https://www.overleaf.com/user/settings) and scroll to **Git integration**. Create or copy your token.

<img src={require('./pdf-accessibility-remediator-screenshots/overleaf-access-token.png').default} alt="Overleaf settings page showing Git authentication tokens" style={{maxWidth: '600px', width: '100%'}} />

### Step 3: Connect to your Overleaf project

**Copy this prompt** (replace with your URL and token):

```
Connect to my Overleaf project.
Git URL: https://git@git.overleaf.com/[PROJECT_ID]
Token: [YOUR_TOKEN]
```

The agent will connect, list your files, and ask which one to improve.

### Step 4: Request accessibility improvements

Once connected, tell the agent which file to make accessible.

**Copy this prompt** (replace with your filename):

```
Make main.tex accessible and create main-accessible.tex in my Overleaf project
```

The agent will:
1. Add accessibility preamble for PDF/UA compliance
2. Generate alt-text for all figures
3. Create a new file with `-accessible` suffix
4. Push it back to your Overleaf project

### Step 5: Switch compiler to LuaLaTeX

**Important:** The accessibility preamble requires LuaLaTeX. In Overleaf, click the **Settings** icon (gear) in the left sidebar.

<img src={require('./pdf-accessibility-remediator-screenshots/overleaf-set-lualatex-step1.png').default} alt="Overleaf Settings icon in sidebar" style={{maxWidth: '300px', width: '100%'}} />

Then go to **Compiler** and select **LuaLaTeX** from the dropdown.

<img src={require('./pdf-accessibility-remediator-screenshots/overleaf-set-lualatex-step2.png').default} alt="Overleaf Settings showing Compiler dropdown with LuaLaTeX selected" style={{maxWidth: '600px', width: '100%'}} />

Recompile your project to generate the accessible PDF.

---

## Quick Reference: Example Prompts

| Scenario | Prompt to Copy |
|----------|----------------|
| **Upload PDF** | `Make this PDF accessible with WCAG 2.1 compliance` |
| **Connect Overleaf** | `Connect to my Overleaf project. Git URL: https://git@git.overleaf.com/[PROJECT_ID] Token: [YOUR_TOKEN]` |
| **Improve LaTeX file** | `Make main.tex accessible and create main-accessible.tex in my Overleaf project` |

---

## Before & After

### Before: Generic Figure Tags

The original PDF has no semantic structure — just generic `<Figure>` tags that screen readers cannot interpret.

<img src={require('./pdf-accessibility-remediator-screenshots/example-original-file.png').default} alt="Original PDF showing generic Figure tags in accessibility panel" style={{maxWidth: '700px', width: '100%'}} />

### After: Proper Semantic Tags

After remediation: `<H1>` for headings, `<P>` for paragraphs, `<Formula>` for math — all with alt-text.

<img src={require('./pdf-accessibility-remediator-screenshots/example-fixed-file.png').default} alt="Remediated PDF showing H1, P, and Formula tags with proper structure" style={{maxWidth: '700px', width: '100%'}} />

---

## Open Source

Self-host or contribute to the underlying tool:

<img src={require('./pdf-accessibility-remediator-screenshots/github-opensource-code-for-self-hosting.png').default} alt="GitHub repository for AI-Powered PDF Accessibility" style={{maxWidth: '600px', width: '100%'}} />

[**GitHub: AI-Powered-PDF-Accessibility →**](https://github.com/AIScientists-Dev/AI-Powered-PDF-Accessibility)
