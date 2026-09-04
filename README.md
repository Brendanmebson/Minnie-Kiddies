# Minnie Kiddies — React + TypeScript rebuild

Stack: **Vite + React + TypeScript + Mantine UI** (no Tailwind), `react-router-dom` for the Home / Shop All / About Us pages, `react-icons` for iconography.

## Run it

```bash
npm install
npm run dev
```

Then open the printed localhost URL. `npm run build` produces a production build in `dist/`.

## Structure

- `src/pages/Home.tsx` — hero, featured collections, top products, "Meet Minnie Kiddies"
- `src/pages/ShopAll.tsx` — filter/sort bar, full product grid, pagination
- `src/pages/AboutUs.tsx` — story, differentiators, team, community section
- `src/components/` — Navbar, Footer, ChatWidget, ReviewPopup, ProductCard, Logo, MeetSection (shared across pages)
- `src/data/products.ts` — product list (name/price)
- `src/main.tsx` — Mantine theme tokens (purple/lavender palette matched to the screenshots)

## Note on images

The screenshots' product photos, store photo and map aren't available as files, so products/hero/team use gradient placeholder blocks in the same color family instead of photography. Drop real images into `src/assets` and swap them into `ProductCard`, `Home.tsx`'s hero, and `MeetSection.tsx`/`AboutUs.tsx` wherever you see the gradient `<div>`s — everything else (layout, spacing, type scale, colors, copy, nav, footer, pagination, popup) matches the reference designs.
# Minnie-Kiddies
