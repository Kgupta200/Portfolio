# Khyati Gupta | Portfolio

A modern, responsive single-page portfolio showcasing my projects, experience, skills and education. Built with plain HTML, CSS and JavaScript, with no frameworks or build step.

**Live site:** https://kgupta200.github.io/Portfolio/

## Features

- Hero, About, Skills, Experience, Projects, Education and Contact sections
- Animated skill bars and smooth scroll-reveal effects
- Light and dark theme that follows the device setting, plus a manual toggle
- Live accent-color picker (6 palettes) that remembers the visitor's choice
- Fully responsive layout for mobile, tablet and desktop
- Respects `prefers-reduced-motion` for accessibility

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (IntersectionObserver, localStorage)
- Google Fonts (Space Grotesk, Inter)

## Project Structure

```
portfolio/
├── index.html   # page structure and content
├── style.css    # all styling, themes and responsive rules
├── app.js       # theme toggle, color picker, scroll animations
└── README.md
```

## Run Locally

```bash
git clone https://github.com/Kgupta200/portfolio.git
cd portfolio
```

Then open `index.html` in your browser. No installation needed.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
4. After a minute, the site goes live at `https://kgupta200.github.io/portfolio/`.

## Customize

- **Content:** edit the text directly in `index.html`.
- **Colors and styling:** change the `--a1` and `--a2` values in the `:root` block of `style.css`, or the `data-palette` rules.
- **Links:** update the LinkedIn, GitHub and project buttons in the Contact and Projects sections.

## Contact

- Email: khyati11gupta@gmail.com
- LinkedIn: https://linkedin.com/in/khyati-gupta-338852274
- GitHub: https://github.com/Kgupta200
