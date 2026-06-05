# John Doe — Personal Site

A dark, minimalist terminal-themed personal website for GitHub Pages.

## Structure

```
personal-site/
├── index.html      # Main single-page app (SPA)
├── style.css       # All styles
├── script.js       # Interactions & animations
├── .nojekyll       # Skip Jekyll processing on GitHub Pages
└── README.md
```

## Sections

| Section   | Anchor     | Description                              |
|-----------|------------|------------------------------------------|
| Home      | `#home`    | Terminal typewriter animation            |
| About     | `#about`   | Bio, timeline, neofetch-style stack card |
| Blog      | `#blog`    | Post grid with metadata                  |
| Contact   | `#contact` | Social links + contact form              |

## Deploy to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io` in ~1 minute

## Customise

| Thing            | Where                                   |
|------------------|-----------------------------------------|
| Name / username  | `index.html` — search `John Doe`        |
| Nav logo / paths | `index.html` — `.nav-logo`, `.nav-link` |
| Blog posts       | `index.html` — `<article class="post-card">` blocks |
| Social links     | `index.html` — `.contact-links` section |
| Colors / fonts   | `style.css` — `:root` variables          |
| Contact form     | `script.js` — replace simulation with Formspree / EmailJS |

## Easter Egg

Type the Konami Code on the page: ↑↑↓↓←→←→BA 🎮

## License

MIT
