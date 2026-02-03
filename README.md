# Night of Praise (one-page site)

Fast, mobile-first, single-page website for the Night of Praise worship evening.

## Tech

- Astro (static output)
- Minimal custom CSS (dark “night sky” style inspired by the sign)
- Google Fonts: Inter + Playfair Display
- Cloudflare Pages deployment (via GitHub)

## Local development

```bash
npm install
npm run dev
```

## Update the content

- Event details: `src/data/event.json`
- Setlist + streaming links: `src/data/setlist.yml`

### Streaming links behavior

The Setlist has a **platform picker** (Spotify / Apple Music / YouTube). Your choice is saved in `localStorage`, and every song’s **Listen** button updates to that platform.

## Deploy to Cloudflare Pages

In Cloudflare Pages:

- **Build command**: `npm run build`
- **Build output directory**: `dist`

