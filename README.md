#  Portfolio
### Angular 19 · NgRx SignalStore · Signals · Standalone Components

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
