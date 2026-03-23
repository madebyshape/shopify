# MadeByShape x Shopify

This is a Shopify starter [MadeByShape](https://madebyshape.co.uk) use internally for projects. It is intended to be used on top of an existing Shopify theme.

## The Stack

- [Vite 8.x](https://vitejs.dev/)
- [Tailwind CSS 4.x](https://tailwindcss.com)
- [Alpine.js 3.x](https://alpinejs.dev/)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)

## Requirements

Before running any commands first install node (v20+) and [shopify cli](https://shopify.dev/docs/themes/tools/cli/install) globally on your computer.

If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm), run `nvm use` / `fnm use` in the project root to automatically switch to the correct Node version (pinned in `.nvmrc`).

## Setup

### 1. Setup Theme

1. Create a new repository for your new Shopify project.
2. Add your theme files into the repository.
3. Download a copy of this repository to your computer using the Code button above.
4. Move these files into your repository.
5. Login to your Shopify store and go to Online Store > Themes.
6. Connect your new repository as a new theme.

### 2. Shopify store ID

Copy `.env.example` to `.env` and update it with your Shopify store ID.
```
cp .env.example .env
```
```
SHOPIFY_STORE=xxxxxx-xx
```

The `.env` file is gitignored so each developer can have their own store ID without it being committed.

### 3. Install dependencies

Run the setup command to install dependencies and copy `.env.example` to `.env` in one step:
```
make setup
```

Or manually:
```
npm install
```

### 4. Link with theme files

This step will vary per theme, but typically you will need to add the following lines to your `layout/theme.liquid` file:

Add your `custom.css` stylesheet link within the `<head>` tags.
```
<link rel="stylesheet" href="{{ 'custom.css' | asset_url }}">
```

Add your `custom.js` script tag at the bottom of the `<body>` tag.
```
<script src="{{ 'custom.js' | asset_url }}" defer="defer"></script>
```

### 5. Good to go 🚀

Once you've completed these steps, you should be ready to start working on your theme!

## CLI commands

Commands are available as both `make` shortcuts and `npm run` equivalents.

| Make | npm | Description |
| ---- | --- | ------- |
| `make setup` | — | First-time setup: copies `.env.example` → `.env` and runs `npm install`. |
| `make dev` | `npm run dev` | Starts Shopify theme dev **and** Vite watch mode together in one terminal. |
| `make build` | `npm run build` | One-off production build of `assets/custom.js` and `assets/custom.css`. |
| `make shopify` | `npm run shopify` | Runs the Shopify site locally only (without the asset watcher). |
| `make pull` | `npm run shopify-pull` | Pulls any CMS changes from your local dev environment into the repository. |
| `make check` | `npm run theme-check` | Runs Shopify's Liquid linter against your theme files. |

## Additional Notes

### TailwindCSS

By default, the TailwindCSS config is set to prefix all classes with `tw-`. This is to prevent any issues with the theme's existing CSS classes.

### Page-specific JS bundles

For JS that only needs to load on certain page types, add a file to `src/pages/`. Vite automatically picks up any `.js` file in that directory and outputs it as `assets/custom-[name].js`.

For example, `src/pages/product.js` becomes `assets/custom-product.js`. Load it conditionally in `layout/theme.liquid`:
```liquid
{% if template == 'product' %}
  <script src="{{ 'custom-product.js' | asset_url }}" defer></script>
{% endif %}
```

An example `src/pages/product.js` is included to get you started.

### Source maps

Source maps are enabled automatically when running in watch/development mode (`npm run dev`), so browser DevTools will point at your original `src/` files. They are disabled in production builds (`npm run build`).

### Dist filenames

Some Shopify theme files come with `custom.css` and `custom.js` included out the box, so be sure to check this.

You can either overwrite these files if that is possible, OR you can update the naming of them in your setup. To rename the outputs, update the `entryFileNames` and `assetFileNames` values in `vite.config.js`.

### Vite config

Vite is configured to output directly into the `assets/` folder without clearing it first (`emptyOutDir: false`), so existing Shopify theme asset files are never deleted. CSS and JS are both compiled from `src/` in a single Vite pass.