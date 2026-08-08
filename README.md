# Anne Warner Therapy

Marketing site for Anne Warner Therapy — built with [Astro](https://astro.build), deployed to Netlify.

## Structure

- `site/` — the Astro project (pages, components, styles)
- `netlify.toml` — points Netlify at `site/` and its build output

## Development

```
cd site
npm install
npm run dev
```

## Build

```
cd site
npm run build   # outputs to site/dist
npm run preview # serve the built site locally
```

## Deploy

Connected to Netlify for continuous deployment — every push to `main` builds and deploys automatically. See `netlify.toml` for build settings.

## Status

- Landing page (`/`) implemented from the approved design (palette "Ink & Olive").
- Hero illustration and Anne's portrait are placeholder blocks pending real assets.
- About, Services, Contact, and Blog pages are not yet built.
