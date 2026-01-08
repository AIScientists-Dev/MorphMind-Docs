# MorphMind Documentation

This is the source code for **[doc.morphmind.ai](https://doc.morphmind.ai)** — MorphMind's official documentation site.

## 📖 View the Live Site

👉 **https://doc.morphmind.ai**

---

## ✏️ How to Edit Content (No Coding Required)

### Option 1: Edit on GitHub (Easiest)

1. Go to the file you want to edit in the `docs/` folder
2. Click the **pencil icon** (Edit) in the top right
3. Make your changes
4. Click **"Commit changes"** at the bottom
5. The site will automatically update in ~2 minutes

### Option 2: Edit Locally

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions.

---

## 📁 Where to Find Things

| What | Where |
|------|-------|
| Documentation pages | `docs/` folder |
| Blog posts | `blog/` folder |
| Images | `docs/[section]/screenshots/` or `static/img/` |

---

## 🖼️ Adding Images

1. Put your image in the `screenshots/` folder inside your doc section
2. Reference it in your markdown:
   ```markdown
   ![Description](./screenshots/my-image.png)
   ```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details on images and videos.

---

## 🛠️ For Developers

<details>
<summary>Click to expand technical setup instructions</summary>

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm start
```

Opens http://localhost:3000 with live reload.

### Build for Production

```bash
npm run build
```

### Deployment

The site auto-deploys to GitHub Pages when you push to `main` branch.

</details>

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:
- Adding blog posts
- Editing documentation
- Adding images and videos

---

## 📧 Questions?

Contact the team or open an issue on GitHub.
