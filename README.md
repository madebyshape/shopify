# MadeByShape x Shopify

## NPM Commands

Before running any commands first install node (v20.11.1) and [shopify cli](https://shopify.dev/docs/themes/tools/cli/install) globally on your computer.

You can then run the following commands.

```
npm run dev
```

This will run the dev site locally, creating a new dev theme if one has not already been created. Dev themes are created automatically by shopify and are machine specific, so if multiple devs are working on the site they will have their own dev themes.

```
npm run shopify-list
```

This will show a list of all themes for the current shopify site you are working on.

```
npm run shop-ify-pull-dev
```

This will pull any CMS changes from you local dev environment into the repo.