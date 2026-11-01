# Minnie Kiddies

The Minnie Kiddies shop: Vite, React, TypeScript and `react-router-dom`, styled with plain CSS tokens in `src/index.css`.

```bash
npm install
npm run dev
npm run build
```

## Where things live

- `src/components/SchoolList.tsx`: the homepage hero. Tick a class list, the bag fills, and it adds to the bag or sends on WhatsApp.
- `src/components/ProductArt.tsx`: the drawn product set. Swap it for real photography when it exists.
- `src/data/products.ts`: catalogue, collections and the class lists.
- `src/data/site.ts`: phone, WhatsApp number, delivery fee, delivery states and photo credits.
- `src/pages/Checkout.tsx`: orders are sent as a pre-filled WhatsApp message; there is no payment gateway or order database.

## Photographs

Photographs are in `src/assets/photos`. They are openly licensed, and `credits.json` there lists each author, licence and source.
