# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Alexis Kovalenko built with React 18 + Vite. A client-side rendered SPA with 5 pages (Home, Contenus, Conferences, Pratique, Archives).

## Development Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

No test or lint scripts are configured.

## Architecture

### Tech Stack
- React 18 with React Router DOM for client-side routing
- Vite for bundling
- CSS Modules for component-scoped styling
- Deployed on Netlify

### Code Organization
- `src/pages/` - Route-based page components (Home, Contenus, Conferences, Pratique, Archives)
- `src/components/` - Shared components, with `Layout/` for Header/Footer and `ui/` for reusable UI primitives
- `src/hooks/` - Custom hooks (useSEO for meta tags, useLatestContent for API fetching)
- `src/data/` - Static data (conferences list)
- `src/styles/` - Global CSS and CSS custom properties (variables.css)

### Styling System
Uses CSS custom properties defined in `variables.css`:
- Brutalist design aesthetic with thick borders (2-3px) and box shadows
- Primary: cream background (#FAFAFA), yellow accent (#FFE600), blue secondary (#0066FF)
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (code)

### External Dependencies
- Fetches content from `https://files.hosakka.studio/api/content.php`
- Google Fonts CDN for typography
