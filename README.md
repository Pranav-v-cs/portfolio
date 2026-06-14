# Pranav's Portfolio

Hey, welcome to the source of my little corner of the internet. This is where I show what I build, who I am, and what I care about as a developer. It's designed to feel clean, intentional, and a bit playful — like the work itself.

## What's inside

The site has five sections that walk through my story:

- **Hero** — a quick hello with my name and what I do, plus a status badge and a way to reach me
- **About** — who I am beyond the code, some stats, and an interactive dot-matrix avatar (hover to reveal the photo, click to keep it)
- **Projects** — a few things I've built, filtered by category. Each card tilts when you move your mouse
- **Skills** — the tools I use, grouped and scrolling like marquees. Hover to pause if something catches your eye
- **Contact** — a working form that sends me a message (no backend needed, it goes through Web3Forms)

## Built with

| What | How |
|------|-----|
| Framework | React 19 + TypeScript |
| Bundler | Vite 8 |
| Styling | TailwindCSS v4 |
| Animation | Framer Motion |
| UI primitives | Radix UI, wrapped shadcn-style |
| Icons | Lucide React, skillicons.dev, and a few hand-picked SVGs |
| Fonts | Inter for reading, Fira Code for the code feel |

## Some design choices I like

- Frosted glass panels for the navbars and cards — keeps the dot grid background visible
- A lime accent in dark mode that shifts to olive in light mode, because colors should breathe with the theme
- The dot grid on the canvas reacts to your mouse — subtle but makes the page feel alive
- Custom cursor that changes color when it's over accent areas, and disappears on mobile
- A full-screen splash on first visit, just for a moment of polish
- Buttons that nudge toward your cursor, and project cards that tilt slightly — small touches that make browsing feel tactile
- Skills scroll in looping marquees and pause when you hover, so you can actually read them

## Running it locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`. The output goes to `dist/`, which gets deployed to the `gh-pages` branch.

## Project layout

```
portfolio/
├── public/
│   ├── icons/          # A few SVG icons I couldn't get from APIs
│   └── images/         # Avatar assets — dot matrix and original photo
├── scripts/
│   └── generate-avatar.js  # Script that turned my photo into a dot matrix
├── src/
│   ├── components/
│   │   ├── effects/    # Splash, cursor, dot grid, scroll reveals, magnetic hover
│   │   ├── layout/     # Top and bottom navigation, footer
│   │   ├── sections/   # The five main sections
│   │   └── ui/         # Reusable UI components
│   ├── data/
│   │   └── portfolio.ts   # All my personal content in one place
│   ├── hooks/
│   │   ├── useMousePosition.ts
│   │   └── useTheme.ts
│   └── lib/
│       └── utils.ts
```

## Making it yours

Everything personal — name, bio, projects, skills, links — lives in `src/data/portfolio.ts`. Change it there and the site updates. The accent colors and theme values are in `src/index.css` as CSS custom properties.
