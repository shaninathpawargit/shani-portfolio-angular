# Shaninath Pawar — Portfolio
### Angular 19 · NgRx SignalStore · Signals · Standalone Components

---

## 🚀 Quick Start

```bash
npm install
ng serve          # → http://localhost:4200
ng build          # production build → /dist
```

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── cursor/       # Custom cursor (pure Signals)
│   │   ├── nav/          # Sticky nav + mobile menu
│   │   ├── hero/         # Landing hero + profile card
│   │   ├── skills/       # Skills grid
│   │   ├── timeline/     # Tabbed experience & education timeline
│   │   ├── projects/     # Featured + other projects
│   │   ├── awards/       # Awards & recognitions
│   │   ├── contact/      # Contact links, languages, interests
│   │   ├── footer/       # Footer
│   │   └── home/         # Lazy-loaded page shell
│   ├── models/
│   │   └── portfolio.models.ts   # TypeScript interfaces
│   ├── store/
│   │   ├── portfolio.store.ts    # NgRx SignalStore (state, computed, methods)
│   │   └── portfolio.data.ts     # All resume content (edit here!)
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
└── assets/
    └── styles/main.scss          # Design tokens + global styles
```

---

## ✏️ Updating Your Content

All content lives in **`src/app/store/portfolio.data.ts`**.  
Edit the `INITIAL_PORTFOLIO_STATE` object — no hunting through templates.

```ts
// Add a new job:
experience: [
  {
    period: 'Jan 2026 — Present',
    role: 'Staff Engineer',
    company: 'New Company',
    ...
  },
  // existing entries...
]

// Add a project:
projects: [
  { name: 'New Project', featured: true, ... },
]
```

---

## ⚡ Angular 19 Features Used

| Feature | Where |
|---------|-------|
| **NgRx SignalStore** | `portfolio.store.ts` — `withState`, `withComputed`, `withMethods`, `patchState` |
| **Angular Signals** | `CursorComponent` — `signal()`, `.update()`, `computed()` |
| **Standalone Components** | All components — no NgModule needed |
| **`inject()`** | All components — no constructor DI |
| **OnPush Change Detection** | All components |
| **Lazy-loaded routes** | `HomeComponent` via `loadComponent` |
| **View Transitions API** | `withViewTransitions()` in router |
| **`@HostListener`** | Nav scroll + cursor mouse tracking |

---

## 🎨 Design Tokens

Edit CSS variables in `src/assets/styles/main.scss`:

```scss
--accent:  #5b8aff;   // Primary blue
--teal:    #2de2c5;   // Secondary teal
--bg:      #07090f;   // Page background
--surface: #111522;   // Card background
```

---

## 🌐 Deploy

```bash
ng build
# Upload /dist/shaninath-portfolio to Netlify, Vercel, or GitHub Pages
```

For GitHub Pages, add `"baseHref": "/repo-name/"` in `angular.json` build options.
