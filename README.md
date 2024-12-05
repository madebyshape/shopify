# MadeByShape x Shopify

This is a Shopify starter [MadeByShape](https://madebyshape.co.uk) use internally for projects. It is intended to be used on top of an existing Shopify theme, allowing you to setup custom CSS and JS. 

## The Stack

- [Webpack 5.x](https://webpack.js.org/) 
- [Tailwind CSS 3.x](https://tailwindcss.com)
- [Alpine.js 3.x](https://alpinejs.dev/)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)

## Requirements

Before running any commands first install node (v20.11.1) and [shopify cli](https://shopify.dev/docs/themes/tools/cli/install) globally on your computer.

## Setup

### 1. Theme Files

Create a new repository for your new Shopify project and add your theme files into it. Download a copy of this repository to your computer using the Code button above. Then move these files into your new project repository.

### 2. Shopify Store ID

Update the following lines in `package.json` with your Shopify store ID e.g. `xxxxxx-xx`.
```
"shopify-dev": "shopify theme dev --store=xxxxxx-xx",
"shopify-list": "shopify theme list --store=xxxxxx-xx",
"shopify-pull-dev": "shopify theme pull -d -n --store=xxxxxx-xx",
```
### 3. Install

```
npm install
```

## NPM Commands

```
npm run dev
```

This will run the dev site locally, creating a new dev theme if one has not already been created. Dev themes are created automatically by shopify and are machine specific, so if multiple devs are working on the site they will have their own dev themes.

```
npm run shopify-list
```

This will show a list of all themes for the current shopify site you are working on.

```
npm run shopify-pull-dev
```

This will pull any CMS changes from you local dev environment into the repo.