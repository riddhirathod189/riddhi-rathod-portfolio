# Riddhi Rathod — Portfolio

A personal portfolio site built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- Hero section with animated terminal and capability pills
- Tech ecosystem visualization
- Journey timeline
- Project showcase with case modals
- Capabilities grid
- Education timeline
- Contact section with email, LinkedIn, and GitHub links
- Downloadable resume PDF

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — build tool and dev server
- **Tailwind CSS 3** — styling
- **Lucide React** — icons

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Type-check
npm run typecheck
```

## Project Structure

```
public/
  Riddhi_Rathod_Resume.pdf   # Downloadable resume
src/
  components/                 # React components
    Hero.tsx
    Navbar.tsx
    Profile.tsx
    TechEcosystem.tsx
    Journey.tsx
    Projects.tsx
    Capabilities.tsx
    Education.tsx
    Contact.tsx
    Footer.tsx
  data/
    portfolio.ts             # All portfolio content/data
  hooks/
    useScroll.ts             # Scroll & reveal hooks
  App.tsx
  main.tsx
  index.css                  # Global styles
index.html
vite.config.ts
tailwind.config.js
tsconfig.json
package.json
```

## Resume

The resume PDF lives in `public/Riddhi_Rathod_Resume.pdf` and is linked from both the Hero and Contact sections using `download="Riddhi_Rathod_Resume.pdf"`.

## License

Personal portfolio. All rights reserved.
