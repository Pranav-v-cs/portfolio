# Pranav's Portfolio

A personal portfolio built with React, TypeScript, Vite, TailwindCSS v4, and Framer Motion — featuring a glassmorphism design with an interactive dot grid background, custom cursor, and smooth animations.

## Tech Stack

| Layer | Tooling |
|-------|---------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | TailwindCSS v4 + CSS custom properties |
| Animation | Framer Motion |
| UI Primitives | Radix UI (custom shadcn-style wrappers) |
| Icons | Lucide React + skillicons.dev + local SVGs |
| Fonts | Inter (body) + Fira Code (code) via Fontsource |

## Design Highlights

- **Glassmorphism** — frosted glass navbars and cards with `backdrop-blur-xl` and semi-transparent backgrounds.
- **Adaptive accent** — bright lime (`#88FF55`) in dark mode, earthy olive (`#6b8e5c`) in light mode.
- **Theme toggle** — dark (`#0a0a0a`) / light (`#efeae2` beige) with smooth transitions.
- **Interactive dot grid** — canvas-based background where dots pulse and glow near the cursor.
- **Custom cursor** — adaptive dot that changes color on accent backgrounds; hidden on mobile.
- **Splash intro** — full-screen animated intro on first load.
- **Magnetic buttons** — interactive buttons that subtly follow the cursor.
- **3D card tilt** — project cards respond to mouse movement for a 3D perspective effect.
- **Marquee skills** — scrolling skill rows that pause on hover.

## Sections

1. **Hero** — animated name and role reveal, status indicator, tagline, contact CTA.
2. **About** — bio paragraphs, stat counters, dot-matrix avatar with spotlight hover reveal (click to toggle full image).
3. **Projects** — 2×2 glass card grid with multi-category filtering (Python, Web, App, ML), 3D tilt, external links.
4. **Skills** — themed marquee rows grouped by category (Programming, Frontend, Backend, AI & Tools). Icons via skillicons.dev + local SVGs for platforms without API icons.
5. **Contact** — functional form (Web3Forms API with mailto: fallback), validation, loading state, social links.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   ├── icons/          # Local SVG icons (Ollama, Render, Railway, LMStudio)
│   └── images/         # Avatar assets (dot matrix SVG, original JPG)
├── scripts/
│   └── generate-avatar.js  # Sharp script to generate dot matrix from image
├── src/
│   ├── components/
│   │   ├── effects/    # SplashScreen, CustomCursor, InteractiveDotGrid,
│   │   │               # ScrollReveal, Magnetic
│   │   ├── layout/     # Navbar, BottomNav, Footer
│   │   ├── sections/   # Hero, About, Projects, Skills, Contact
│   │   └── ui/         # shadcn-style wrappers (Button, Card, Badge, etc.)
│   ├── data/
│   │   └── portfolio.ts   # All personal content, project data, skill icons
│   ├── hooks/
│   │   ├── useMousePosition.ts
│   │   └── useTheme.ts
│   └── lib/
│       └── utils.ts    # cn() helper
```

## Configuration

All portfolio content lives in `src/data/portfolio.ts` — name, bio, projects, skills, social links, and the skill icon mapping. To customize the accent color or theme values, edit the CSS custom properties in `src/index.css`.
