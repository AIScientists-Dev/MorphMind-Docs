# Contributing to MorphMind Docs

Thank you for your interest in contributing to MorphMind documentation and blog! We welcome contributions from the community.

## How to Contribute

### Submitting a Blog Post

1. **Fork the repository** and create a new branch from `main`
   ```bash
   git checkout -b blog/my-blog-post-title
   ```

2. **Create your blog post** in the `blog/` directory:
   - File naming: `YYYY-MM-DD-your-blog-post-title.md` (or `.mdx` for MDX posts)
   - Example: `2026-01-15-getting-started-with-morphmind.md`

3. **Add frontmatter** to your blog post:
   ```markdown
   ---
   slug: your-blog-post-slug
   title: Your Blog Post Title
   authors: [your-github-username]
   tags: [tag1, tag2]
   ---
   
   Your blog post summary here.
   
   <!-- truncate -->
   
   Rest of your blog post content...
   ```

4. **Add yourself to `blog/authors.yml`** if you're a new contributor:
   ```yaml
   your-github-username:
     name: Your Full Name
     title: Your Title (optional)
     url: https://your-website.com (optional)
     image_url: https://github.com/your-github-username.png
     page: true
     socials:
       github: your-github-username
       # Add other social links as needed
   ```

5. **Test locally** (optional but recommended):
   ```bash
   npm install
   npm start
   ```
   Visit `http://localhost:3000/blog` to preview your post

6. **Commit and push** your changes:
   ```bash
   git add blog/
   git commit -m "Add blog post: Your Blog Post Title"
   git push origin blog/my-blog-post-title
   ```

7. **Create a Pull Request** on GitHub with:
   - A clear title describing your blog post
   - A description of what the post covers
   - Any relevant tags or labels

### Blog Post Guidelines

- **Content**: Posts should be relevant to MorphMind, AI, machine learning, or related topics
- **Quality**: Well-written, proofread, and factually accurate
- **Length**: No strict limit, but aim for meaningful content (typically 500+ words)
- **Images**: Place images in a folder with your post (e.g., `blog/2026-01-15-post-name/image.png`)
- **Formatting**: Use Markdown formatting, code blocks for code examples
- **Truncate**: Use `<!-- truncate -->` to mark where the summary ends

### Review Process

- All submissions require review and approval from the MorphMind team
- We may request changes or edits before merging
- Approved posts will be merged and automatically deployed via GitHub Actions
- We reserve the right to decline submissions that don't meet our guidelines

### Contributing to Documentation

Documentation improvements are also welcome! Follow similar steps:
1. Fork and create a branch
2. Make your changes in the `docs/` directory
3. Test locally
4. Submit a Pull Request

## Questions?

If you have questions about contributing, please:
- Open an issue on GitHub
- Contact the maintainers

Thank you for contributing to MorphMind! 🚀
