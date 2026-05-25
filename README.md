# Creative Theme for Jekyll

A Jekyll implementation of the [Creative Theme](http://startbootstrap.com/template-overviews/creative/) template by [Start Bootstrap](http://startbootstrap.com), modernised for 2026.

## Changes from the original fork

- **Bootstrap 3 → 5** — updated all templates to Bootstrap 5 markup (`data-bs-*` attributes, `offset-*` classes, `g-0`, `img-fluid`, etc.). jQuery removed entirely.
- **Font Awesome 4 → 6** — vendored `font-awesome/` directory removed; FA6 loaded via CDN. Icon classes updated to FA6 syntax (`fa-solid`, `fa-brands`, `fa-regular`).
- **WOW.js → AOS** — replaced unmaintained WOW.js + animate.css with [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) via CDN.
- **Jekyll 4** — added `Gemfile` with Jekyll 4.3, `jekyll-feed`, `jekyll-sitemap`, and `jekyll-seo-tag`.
- **SEO** — `{% seo %}` tag added to `<head>` (handles `<title>`, Open Graph, Twitter Card, and meta description automatically).
- **Google Fonts** — updated to `display=swap` to prevent flash of invisible text.
- **Vanilla JS** — `creative.js` rewritten without jQuery; smooth scroll, navbar shrink on scroll, and mobile nav close all use native browser APIs.
- **Sass** — migrated from deprecated `@import` to `@use`/`@forward` module system; replaced deprecated `darken()` with `color.adjust()`; removed vendor-prefixed and dead properties.
- **Accessibility** — `aria-hidden` on decorative icons, `aria-label` on social links, proper `aria-*` attributes on the mobile nav toggle.
- **Bug fixes** — missing closing `</div>` in `contact.html`; malformed front matter in `index.html`; duplicate meta tags removed from `head.html`; duplicate `email` key removed from `_config.yml`.
- **Removed** — IE8 conditional shims, `X-UA-Compatible` meta tag, vendored Bootstrap CSS/JS, `jquery.easing`, `jquery.fittext`, `classie`, `cbpAnimatedHeader`, Glyphicons fonts.
- **Added** — `404.html`, `robots.txt`, favicon link, updated `.gitignore`.

## Setup

1. Fill in your details in `_config.yml` (title, url, email, author, social usernames).
2. Replace `img/header.jpg` and `img/portfolio/*.jpg` with your own images (JPG, PNG, WebP, or SVG all work).
3. Add a `favicon.ico` to the repo root.
4. Install Ruby 3.x via [rbenv](https://github.com/rbenv/rbenv) if not already available.
5. Install dependencies and serve locally:

```bash
bundle install
bundle exec jekyll serve
```

## GitHub Pages Deployment

This theme is configured for deployment via GitHub Actions.

1. **Repository Settings**: In your GitHub repo, go to **Settings > Pages**.
2. **Build and deployment**: Under **Source**, select **GitHub Actions**.
3. **Deploy**: Any push to the `main` branch will automatically build and deploy the site.

Live URL: [https://soinkleined.github.io/daveklein_com/](https://soinkleined.github.io/daveklein_com/)

## Writing Content (Markdown Support)

The theme has been extended to support Markdown-driven content for blogs, CVs, and other standalone pages.

### Creating Pages (e.g., CV)
Create a `.md` file in the root directory and use the `page` layout:
```markdown
---
layout: page
title: "My CV"
description: "A brief overview of my professional experience."
---
# Experience
* Item 1...
```

### Creating Blog Posts
Add Markdown files to the `_posts/` directory using the `YYYY-MM-DD-title.md` format:
```markdown
---
layout: page
title: "My First Post"
---
Your content here...
```

## Customisation

- Reorder or remove sections in `_layouts/front.html`.
- Theme colour is set via `$theme-primary` in `_sass/_base.scss` (default: `#F05F40`).
- Each section is a separate include in `_includes/` (e.g., `experience.html`, `blog.html`).
- Social links (Twitter, GitHub, email) are driven by `_config.yml` — set `twitter_username`, `github_username`, and `email`. Leave blank to hide.
