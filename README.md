# MadeByShape x Shopify

This is a Shopify starter [MadeByShape](https://madebyshape.co.uk) use internally for projects. It is intended to be used on top of an existing Shopify theme.

## The Stack

- [Webpack 5.x](https://webpack.js.org/)
- [Tailwind CSS 4.x](https://tailwindcss.com)
- [Alpine.js 3.x](https://alpinejs.dev/)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)

## Requirements

Before running any commands first install node (v20.11.1) and [shopify cli](https://shopify.dev/docs/themes/tools/cli/install) globally on your computer.

## Setup

### 1. Setup Theme

1. Create a new repository for your new Shopify project.
2. Add your theme files into the repository.
3. Download a copy of this repository to your computer using the Code button above.
4. Move these files into your repository.
5. Login to your Shopify store and go to Online Store > Themes.
6. Connect your new repository as a new theme.

### 2. Shopify store ID

Update the following lines in `package.json` with your Shopify store ID e.g. `xxxxxx-xx`.
```
"shopify-dev": "shopify theme dev --store=xxxxxx-xx",
"shopify-list": "shopify theme list --store=xxxxxx-xx",
"shopify-pull-dev": "shopify theme pull -d -n --store=xxxxxx-xx",
```
### 3. Install dependencies

```
npm install
```

### 4. Link with theme files
This step when vary per theme, but typically, you will need to add the following lines to your `layout/theme.liquid` file:

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

| Command | Description |
| -------- | ------- |
| `npm run shopify` | Runs the Shopify site locally, creating a new dev theme. |
| `npm run shopify-pull` | Pulls any CMS changes from you local dev environment into the repository. |
| `npm run dev` | Starts Webpack + TailwindCSS development. |
| `npm run build` | Runs Webpage + TailwindCSS production build. |

## Additional Notes

### TailwindCSS

By default, the TailwindCSS config is set to prefix all classes with `tw-`. This is to prevent any issues with the themes existing CSS classes.

### Dist filenames

Some Shopify theme files come with `custom.css` and `custom.js` included out the box, so be sure to check this.

You can either overrite these files if that is possible, OR you can update the naming of them in your setup. This would require you updating the `watch:tailwind` script in `package.json` and also the filename in `webpack.config.js`.

## Shopify Plugins we ❤️

- [Accounts](https://apps.shopify.com/customer-accounts)
- [Wishlist](https://apps.shopify.com/wishlist-king)
- [Product Filtering](https://apps.shopify.com/search-and-discovery)
- [Imports / Exports](https://apps.shopify.com/excel-export-import)
- [Memberships](https://apps.shopify.com/membership-program)
- [Custom Email Templates](https://apps.shopify.com/email-templates)
- [Translations](https://apps.shopify.com/translate-and-adapt)
- [Google Shopping Feed](https://apps.shopify.com/google-shopping-feed)
- [Custom Flows](https://apps.shopify.com/flow)
- [Free Shipping Upsell](https://apps.shopify.com/essential-order-value-booster)
- [Klaviyo](https://apps.shopify.com/klaviyo-email-marketing)
- [Automatic Discounts](https://apps.shopify.com/regios-automatic-discounts)
- [Loyalty / Rewards](https://apps.shopify.com/bon-loyalty-rewards)
- [Wholesale](https://apps.shopify.com/wholesale-sami)

