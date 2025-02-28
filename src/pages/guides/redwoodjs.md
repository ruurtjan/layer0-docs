---
title: RedwoodJS
---

This guide shows you how to deploy [RedwoodJS](https://redwoodjs.com/) apps on {{ PRODUCT_NAME }}.

## Example {/*example*/}

<ButtonLinksGroup>
  <ButtonLink variant="fill" type="default" href="https://layer0-docs-layer0-redwoodjs-example-default.layer0-limelight.link/">
   Try the RedwoodJS Example Site
  </ButtonLink>
  <ButtonLink variant="stroke" type="code" withIcon={true} href="https://github.com/layer0-docs/layer0-redwoodjs-example">
   View the Code
  </ButtonLink>
  <ButtonLink variant="stroke" type="deploy" withIcon={true} href="https://app.layer0.co/deploy?button&deploy&repo=https%3A%2F%2Fgithub.com%2Flayer0-docs%2Flayer0-redwoodjs-example">
    Deploy to Layer0
  </ButtonLink>
</ButtonLinksGroup>

## Connector {/*connector*/}

This framework has a connector developed for {{ PRODUCT_NAME }}. See [Connectors](connectors) for more information.

<ButtonLink variant="stroke" type="code" withIcon={true} href="https://github.com/layer0-docs/layer0-connectors/tree/main/layer0-redwood-connector">
 View the Connector Code
</ButtonLink>

{{ SYSTEM_REQUIREMENTS }}

## Getting Started {/*getting-started*/}

If you don't already have a RedwoodJS app, use the terminal (or command prompt on Windows) to create one using the commands below:

```cli
yarn create redwood-app ./my-redwood-app
```

### Install the {{ PRODUCT_NAME }} CLI globally {/*install-the-layer0-cli-globally*/}

```bash
npm i -g {{ PACKAGE_NAME }}/cli # yarn global add {{ PACKAGE_NAME }}/cli
```

To prepare your RedwoodJS app for deployment on {{ PRODUCT_NAME }}, you can use both the RedwoodJS or {{ PRODUCT_NAME }} CLI depending on what you prefer.

### Using RedwoodJS CLI {/*using-redwoodjs-cli*/}

You will first need to setup {{ PRODUCT_NAME }} as a deploy provider via:

```bash
yarn rw setup deploy {{ FULL_CLI_NAME }}
```

This will verify that the {{ PRODUCT_NAME }} CLI is setup on your system and initialize the application accordingly.

### Using {{ PRODUCT_NAME }} CLI {/*using-layer0-cli*/}

For preparing using the {{ PRODUCT_NAME }} CLI, run:

```bash
{{ CLI_NAME }} init
```

This will automatically add all of the required dependencies and files to your project. These include:

- The `{{ PACKAGE_NAME }}/core` package - Allows you to declare routes and deploy your application on {{ PRODUCT_NAME }}
- The `{{ PACKAGE_NAME }}/redwoodjs` package - Provides router middleware that automatically adds RedwoodJS routes to the {{ PRODUCT_NAME }} router.
- `routes.js` - A default routes file that sends all requests to RedwoodJS. Update this file to add caching or proxy some URLs to a different origin.
- `{{ CONFIG_FILE }}` - Contains configuration options for deploying on {{ PRODUCT_NAME }}.

## Running Locally {/*running-locally*/}

To simulate your app within {{ PRODUCT_NAME }} locally, run:

```bash
{{ CLI_NAME }} dev
```

### Simulate edge caching locally {/*simulate-edge-caching-locally*/}

To simulate edge caching locally, run:

```bash
{{ CLI_NAME }} dev --cache
```

## Deploying {/*deploying*/}

Deploying requires an account on {{ PRODUCT_NAME }}. [Sign up here for free.]({{ APP_URL }}/signup) Once you have an account, you can deploy to {{ PRODUCT_NAME }} by running the following in the root folder of your project

You can deploy using the RedwoodJS CLI using:

```bash
yarn rw deploy {{ FULL_CLI_NAME }}
```

You can also deploy using {{ PRODUCT_NAME }} with:

```bash
{{ CLI_NAME }} deploy
```

The deploy command for RedwoodJS takes the same deploy arguments as using {{ PRODUCT_NAME }} to deploy. You can see all the available options using `yarn rw deploy {{ FULL_CLI_NAME }} --help`

See [deploying](deploying) for more information.
