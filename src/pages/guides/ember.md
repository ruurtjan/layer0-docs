---
title: Ember.js
---

This guide shows you how to deploy a [Ember.js](https://emberjs.com/) application on {{ PRODUCT_NAME }}.

## Example {/*example*/}

<ButtonLinksGroup>
  <ButtonLink variant="fill" type="default" href="https://layer0-docs-layer0-emberjs-example-default.layer0-limelight.link">
   Try the Ember.js Example Site
  </ButtonLink>
  <ButtonLink variant="stroke" type="code" withIcon={true} href="https://github.com/layer0-docs/layer0-emberjs-example">
   View the Code
  </ButtonLink>
  <ButtonLink variant="stroke" type="deploy" withIcon={true} href="https://app.layer0.co/deploy?button&deploy&repo=https://github.com/layer0-docs/layer0-emberjs-example">
    Deploy to Layer0
  </ButtonLink>
</ButtonLinksGroup>

{{ SYSTEM_REQUIREMENTS }}

{{ SIGN_UP_LAYER0 }}

## Install the {{ PRODUCT_NAME }} CLI {/*install-the-layer0-cli*/}

If you have not already done so, install the [{{ PRODUCT_NAME }} CLI](cli)

```bash
npm i -g {{ PACKAGE_NAME }}/cli # yarn global add {{ PACKAGE_NAME }}/cli
```

## Create a new Ember.js app {/*create-a-new-emberjs-app*/}

If you don't already have a Ember.js app, create one by running the following:

```bash
npm install -g ember-cli
ember new ember-quickstart --lang en
cd ember-quickstart
```

You can verify your app works by running it locally with:

```bash
ember serve
```

## Configuring your Ember.js app for {{ PRODUCT_NAME }} {/*configuring-your-emberjs-app-for-layer0*/}

### Initialize your project {/*initialize-your-project*/}

In the root directory of your project run `{{ CLI_NAME }} init`:

```bash
{{ CLI_NAME }} init
```

This will automatically update your `package.json` and add all of the required {{ PRODUCT_NAME }} dependencies and files to your project. These include:

- The `{{ PACKAGE_NAME }}/core` package - Allows you to declare routes and deploy your application on {{ PRODUCT_NAME }}
- The `{{ PACKAGE_NAME }}/prefetch` package - Allows you to configure a service worker to prefetch and cache pages to improve browsing speed
- `{{ CONFIG_FILE }}` - A configuration file for {{ PRODUCT_NAME }}
- `routes.js` - A default routes file that sends all requests to Ember.js.

### Configure the routes {/*configure-the-routes*/}

Update `routes.js` at the root of your project to the following:

```js
// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'

export default new Router()
  .match('/robots.txt', ({ serveStatic }) => {
    serveStatic('dist/robots.txt')
  })
  .match('/assets/:path*', ({ cache, serveStatic }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 60 * 365,
        forcePrivateCaching: true,
      },
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: 60 * 60 * 24,
      },
    })
    serveStatic('dist/assets/:path*')
  })
  .fallback(({ appShell }) => {
    appShell('dist/index.html')
  })
```

Refer to the [Routing](routing) guide for the full syntax of the `routes.js` file and how to configure it for your use case.

### Run the Ember.js app locally on {{ PRODUCT_NAME }} {/*run-the-emberjs-app-locally-on-layer0*/}

Create a production build of your app by running the following in your project's root directory:

```bash
npm run build
```

Run {{ PRODUCT_NAME }} on your local machine:

```bash
{{ CLI_NAME }} dev
```

Load the site http://127.0.0.1:3000

## Deploying {/*deploying*/}

Create a production build of your app by running the following in your project's root directory:

```bash
npm run build
```

Next, deploy the build to {{ PRODUCT_NAME }} by running the `{{ CLI_NAME }} deploy` command:

```bash
{{ CLI_NAME }} deploy
```

Refer to the [Deploying](deploying) guide for more information on the `deploy` command and its options.
