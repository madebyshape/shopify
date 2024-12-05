# NTH Degree

## Environments

### Live
https://nthdegree.co.uk/

### Staging
https://nthdegree.co.uk/?_ab=0&_fd=0&_sc=1&preview_theme_id=174753218902

### Development
https://nth-degree-dev.myshopify.com/

## NPM Commands

Before running any commands first install node (v20.11.1) and [shopify cli](https://shopify.dev/docs/themes/tools/cli/install) globally on your computer.

You can then run the following commands.

```
npm run dev
```

This will run the dev site locally, creating a new dev theme if one has not already been created. Dev themes are created automatically by shopify and are machine specific, so if multiple devs are working on the site they will have their own dev themes.

```
npm run list
```

This will show a list of all themes for the current shopify site you are working on.

```
npm run pull-dev
```

This will pull any CMS changes from you local dev environment into the repo.