# MadeByShape x Shopify

This is a Shopify starter [MadeByShape](https://madebyshape.co.uk) use internally for projects. It is intended to be used on top of an existing Shopify theme. 

## The Stack

- [Webpack 5.x](https://webpack.js.org/) 
- [Tailwind CSS 3.x](https://tailwindcss.com)
- [Alpine.js 3.x](https://alpinejs.dev/)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)

## Requirements

Before running any commands first install node (v20.11.1) and [shopify cli](https://shopify.dev/docs/themes/tools/cli/install) globally on your computer.

## Setup

### 1. Theme files

Create a new repository for your new Shopify project and add your theme files into it. Download a copy of this repository to your computer using the Code button above. Then move these files into your new project repository.

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
| `npm run shopify-dev` | Runs the Shopify site locally, creating a new dev theme. |
| `npm run shopify-list` | Shows a list of all themes for the current shopify site you are working on. |
| `npm run shopify-pull-dev` | Pulls any CMS changes from you local dev environment into the repository. |
| `npm run dev` | Starts Webpack + TailwindCSS development. |
| `npm run build` | Runs Webpage + TailwindCSS production build. |

## Additional Notes

### TailwindCSS

By default, the TailwindCSS config is set to prefix all classes with `tw-`. This is to prevent any issues with the themes existing CSS classes. 

### Dist filenames

Some Shopify theme files come with `custom.css` and `custom.js` included out the box, so be sure to check this. 

You can either overrite these files if that is possible, OR you can update the naming of them in your setup. This would require you updating the `watch:tailwind` script in `package.json` and also the filename in `webpack.config.js`.

## Shopify Plugins we ❤️

| Name | Description |
| -------- | ------- |
| [Accounts](https://apps.shopify.com/customer-accounts) | All-in-One Customer Portal: Profile, Orders, Loyalty, Referral, Wishlist, Custom Forms, Social Login. |
| [Wishlist](https://apps.shopify.com/wishlist-king) | A fully customisable Wishlist solution that enhances your customers shopping journey to drive sales. |
| [Search & Discovery](https://apps.shopify.com/search-and-discovery) | Help customers find the right products and sell more using Shopify’s free Search & Discovery app. |
| [Matrixify](https://apps.shopify.com/excel-export-import) | Matrixify app helps you to manage store data - bulk import, export, update and migrate. |
| [Memberships](https://apps.shopify.com/membership-program) | Memberships, mastered. Easily manage membership programs – increase loyalty & recurring revenue. |
| [Orderly Emails](https://apps.shopify.com/email-templates) | Increase sales and customer loyalty with customized, branded email templates that match your store. |
| [Translate & Adapt](https://apps.shopify.com/translate-and-adapt) | Speak every customer’s language. It’s easy to translate and adapt your store content for any market. |
| [Google Shopping Feed](https://apps.shopify.com/google-shopping-feed) | Submits Product Feed for Google Shopping, Microsoft, Facebook & Pinterest. Manages PMAX Campaigns. |
| [Flow](https://apps.shopify.com/flow) | Customize your store and automate your tasks using Shopify Flow’s low-code editor. |
| [Free Shipping Upsell](https://apps.shopify.com/essential-order-value-booster) | Increase Profits, AOV & Sales With A Free Shipping Progress Bar Cart Goal and Cart Upsell. |
| [Klaviyo](https://apps.shopify.com/klaviyo-email-marketing) | Grow faster and more efficiently with email, sms, reviews and more. Powered by your customer data. |
| [Automatic Discounts](https://apps.shopify.com/regios-automatic-discounts) | Description |
| [BON Loyalty](https://apps.shopify.com/bon-loyalty-rewards) | A unified, intuitive and powerful loyalty program with rewards & referrals to boost repeat purchases. |
| [Sami Wholesale](https://apps.shopify.com/wholesale-sami) | A super comprehensive solution to customize and manage wholesale pricing on your store. |

