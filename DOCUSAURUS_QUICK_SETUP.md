# Docusaurus Quick Setup Checklist

## ✅ Already Done
- [x] Created Docusaurus project

## Next Steps (5 minutes)

### 1. Configure for GitHub Pages
Edit `docusaurus.config.ts`:
- Set `url: 'https://doc.morphmind.ai'`
- Set `baseUrl: '/'`
- Set `organizationName: 'MorphMind-AI'`
- Set `projectName: 'morphmind-docs'`

### 2. Create CNAME File
```bash
echo "doc.morphmind.ai" > static/CNAME
```

### 3. Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml` (copy from DOCUSAURUS_SETUP.md)

### 4. Push to GitHub
```bash
git remote add origin https://github.com/MorphMind-AI/morphmind-docs.git
git add .
git commit -m "Initial setup"
git push -u origin main
```

### 5. Enable GitHub Pages
- Repo → Settings → Pages → Source: **GitHub Actions**

### 6. Add DNS Record
At domain registrar:
```
Type: CNAME
Name: doc
Value: MorphMind-AI.github.io
```

### 7. Wait & Verify
- Wait 5-10 min for DNS
- Visit: https://doc.morphmind.ai

Done! 🎉
