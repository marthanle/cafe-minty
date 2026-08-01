# Café Minty

A soft, feminine brand site for Café Minty — matcha, coffee, and small-batch
desserts. Homepage, recipe grid with category filters, and full recipe detail
pages (ingredients, steps, notes, credits).

Built with React + Vite + React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Editing recipes and content

- `src/data/recipes.js` — all recipe content (title, categories, ingredients,
  steps, notes, credits, photos)
- `src/data/categories.js` — category colors (matcha/coffee/dessert)
- `src/data/whatsHappening.js` — the homepage "What's happening" order-drop /
  pop-up status; edit `status` here by hand when one is scheduled
- `src/assets/images/` — recipe and story photos

## Deploying

`npm run build` produces a static site in `dist/`. Any static host works
(Netlify, Vercel, GitHub Pages, etc.) — since routing is client-side, the
host needs to rewrite unknown paths back to `index.html` (e.g. a
`_redirects` file with `/*  /index.html  200` on Netlify, or Vercel's
default SPA rewrite).
