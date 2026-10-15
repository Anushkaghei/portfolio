# anushkaghei.netlify.app

Personal portfolio for Anushka Ghei. Plain HTML, CSS, and JavaScript with no build step.

## Files

- `index.html`: all page content (experience, projects, publications, skills)
- `styles.css`: layout and light/dark theme
- `main.js`: theme toggle, mobile menu, project filters, scroll effects
- `assets/Anushka_Ghei_Resume.pdf`: the resume linked from the site

## Editing

Open `index.html` and edit the text directly. To update the resume, replace
`assets/Anushka_Ghei_Resume.pdf` and keep the same filename.

Preview locally:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploying

Netlify is connected to this repo. Every push to `main` redeploys the site.
No build command is needed (see `netlify.toml`).
