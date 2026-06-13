# Empower Genius India

A production-ready business website for **Empower Genius India** — India's premier education event management company. Built with React 19, TypeScript, Vite, and Bootstrap 5.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Vite | 6.x | Build tool & dev server |
| Bootstrap | 5.3.x | Styling & responsive layout |

---

## Project Structure

```
react19-business-pro/
├── index.html               # Vite HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json
└── src/
    ├── main.tsx             # App entry point
    ├── App.tsx              # Root component
    ├── styles.css           # Global styles & design tokens
    └── sections/
        ├── Navbar.tsx       # Sticky navigation bar
        ├── Hero.tsx         # Hero section with stats
        ├── Services.tsx     # Events showcase (5 event types)
        ├── About.tsx        # About the company
        ├── Testimonials.tsx # Educator testimonials
        ├── Contact.tsx      # Contact form with details
        └── Footer.tsx       # Footer with links & info
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview production build

```bash
npm run preview
```

---

## Events Covered

- **School Events** — Student achievement & school community events
- **Education Fair** — Institutions showcasing programs to students & parents
- **Faculty Development Program** — Teacher training in modern pedagogy
- **Principal Conclave** — Leadership forum for school principals
- **Teacher Conclave** — Collaboration platform for educators

---

## Contact


---

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

The project is auto-detected as a Vite app. No extra configuration needed.

Live URL format: `https://empower-genius-india.vercel.app`

---

## License

Private — © 2026 Empower Genius India. All rights reserved.
