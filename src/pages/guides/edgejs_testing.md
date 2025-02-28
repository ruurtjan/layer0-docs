---
title: EdgeJS Unit Testing
---

Layer0 provides an EdgeJS testing utility to facilitate in unit-testing your Layer0 router logic, helping to mock and run your routes in a test environment just as they would be handled live on your production site.

## Configuration {/*configuration*/}

If not already configured for your project, we require using `jest` for unit-testing your Layer0 router logic. It is also recommended to use `nock` for mocking HTTP requests your application may make.

```bash
npm i -D jest babel-jest nock @babel/core @babel/preset-env @babel/preset-typescript
```

Create `babel.config.js` in the root of your project:

```js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
}
```

You can find more information around configuring Jest with their [Getting Started](https://jestjs.io/docs/getting-started) guide.

## Testing {/*testing*/}

At the top of each unit test, import the following:

```js
// reference to your Layer0 router
import routes from '../routes'

// router helper functions
import { runRoute, appHost, backendHost, staticHost } from '@layer0/core/test-utils'

// http mocking library
import nock from 'nock'
```

### Assertions {/*assertions*/}

By default, importing `@layer0/core/test-utils` will automatically add the following assertions to Jest's `expect` function:

- `toHaveHeader(name, [value])`
- `toHaveBody(string|RegExp)`
- `toBeCachedByTheEdge()`
- `toBeCachedByTheEdgeFor(seconds)`
- `toBeCachedByTheBrowser()`
- `toBeCachedByTheBrowserFor(seconds)`
- `toBeCachedByTheServiceWorker()`
- `toBeCachedByTheServiceWorkerFor(seconds)`
- `toBeServedStale()`
- `toBeServedStaleFor(seconds)`

### Route Testing {/*route-testing*/}

To test a specific route handler, import `runRoute` from `@layer0/core/testing-utils`. This function accepts your router instance, and the path of the route to run.

```js
import { runRoute } from '@layer0/core/test-utils'
import router from '../src/routes'

...

it('should run the /foo route', () => {
  const handler = jest.fn()
  router.match('/foo', handler)

  const response = await runRoute(router, '/foo')

  expect(handler).toBeCalled()
  expect(response.request.path).toEqual('/foo')
})
```

For extended route testing, you can import `createRouteMock` to set the `path`, `method`, `headers`, or `body` of the request:

```js
import { runRoute, createRouteMock } from '@layer0/core/test-utils'
import router from '../src/routes'

...

it('should run the /search route', () => {
  const handler = jest.fn()
  router.post('/search', handler)

  const response = await runRoute(router, createRouteMock({
    path: '/search',
    method: 'POST',
    body: '{"query": "foo"}'
  }))

  expect(handler).toBeCalled()
  expect(response.request.path).toEqual('/search')
})
```

### Host Mocking {/*host-mocking*/}

If the route being tested has an upstream request or serves a static file, you will want to mock these requests and responses. This decouples your unit tests from your upstream and application logic, focusing just on how the router responds to the given request. For this, we use `nock` along with `appHost`, `backendHost`, and `staticHost` imported from `@layer0/core/testing-utils`.

These functions reference the backend entries defined in your `layer0.config.js` file.

#### Mocking _appHost_ Example {/*mocking-apphost-example*/}

If your route sends a response from your application, such as `renderWithApp` or using `NextRoutes`, `NuxtRoutes`, etc., use `appHost()` to reference the host and port for mocking the request and response.

```js
// src/router.ts
...
export default new Router()
  .get('/collections/:path*', ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60
      }
    })
  })
  .fallback(({ renderWithApp }) => renderWithApp())
```

...

```js
// routes.test.ts
it('should cache the collections page at the edge for 1 hour', async () => {
  nock(`http://${appHost()}`)
    .get('/collections/c1')
    .reply(200, '')

  const result = await runRoute(routes, '/collections/c1')
  expect(result).toBeCachedByTheEdgeFor(60 * 60)
})
```

#### Mocking _backendHost_ Example {/*mocking-backendhost-example*/}

Routes that use `proxy` to fetch from a backend can be mocked using `backendHost(name)`, where `name` is the key used for the backend defined in `layer0.config.js`.

```js
// layer0.config.js
module.exports = {
  routes: './src/routes.ts',
  backends: {
    origin: {
      domainOrIp: 'api.example.com',
      hostHeader: 'api.example.com',
    },
  },
}

// src/routes.ts
export default new Router().get('/collections/:path*', ({ cache, proxy }) => {
  cache({
    edge: {
      maxAgeSeconds: 60 * 60,
    },
  })
  proxy('origin')
})
```

...

```js
// routes.test.ts
it('should cache the collections page at the edge for 1 hour', async () => {
  nock(`http://${backendHost('origin')}`)
    .get('/collections/c1')
    .reply(200, '')

  const result = await runRoute(routes, '/collections/c1')
  expect(result).toBeCachedByTheEdgeFor(60 * 60)
})
```

#### Mocking _staticHost_ Example {/*mocking-statichost-example*/}

For serving static assets, mock the asset host using `staticHost()`.

```js
// src/routes.ts
export default new Router().get('/icons/:path*', ({ cache, serveStatic }) => {
  cache({
    edge: {
      maxAgeSeconds: 60 * 60,
    },
  })
  serveStatic('assets/icons/:path*')
})
```

...

```js
// routes.test.ts
it('should cache the static asset at the edge for 1 hour', async () => {
  nock(`http://${staticHost()}`)
    .get('/assets/icons/user.png')
    .reply(200, '')

  const result = await runRoute(routes, '/icons/user.png')
  expect(result).toBeCachedByTheEdgeFor(60 * 60)
})
```

## Example Tests {/*example-tests*/}

For a more detailed example of EdgeJS unit testing, check out our [Layer0 Templates](https://github.com/layer0-docs/layer0-templates) for a full implementation.
