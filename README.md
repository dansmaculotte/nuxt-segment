# nuxt-segment-analytics

[![David-DM][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

> NuxtJS module for Stripe.js

[📖 **Release Notes**](./CHANGELOG.md)

This module uses [vue-segment-analytics](https://github.com/Kapiche/vue-segment-analytics) to add Segment Analytics to a Nuxt.js app.
You can make called with this.$analytics.track()

## Setup

- Add `nuxt-segment-analytics` dependency using yarn or npm to your project
- Add `nuxt-segment-analytics` to `modules` section of `nuxt.config.js`

## Usage
### nuxt.config.js
```js
{
  modules: [
    // Simple usage
    'nuxt-segment-analytics',

    // With options
    ['nuxt-segment-analytics', { id: "SEGMENT_KEY", useRouter: true }],
 ]
}
```

### YourComponent.vue
```js
export default {
  mounted () {
    this.$analytics.identify('f4ca124298', {
      name: 'Michael Bolton',
      email: 'mbolton@initech.com'
    })
    this.$analytics.track('Signed Up', { plan: 'Enterprise' })
    this.$analytics.page('Pricing');
  }
}
```


## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Dylan Wight <dylan@otechie.com>

<!-- Badges -->
[david-dm-src]: https://david-dm.org/https://github.com/dgwight/nuxt-segment-analytics/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/https://github.com/dgwight/nuxt-segment-analytics
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
[circle-ci-src]: https://img.shields.io/circleci/project/github/https://github.com/dgwight/nuxt-segment-analytics.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/https://github.com/dgwight/nuxt-segment-analytics
[codecov-src]: https://img.shields.io/codecov/c/github/https://github.com/dgwight/nuxt-segment-analytics.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/https://github.com/dgwight/nuxt-segment-analytics
[npm-version-src]: https://img.shields.io/npm/dt/nuxt-segment-analytics.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-segment-analytics
[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-segment-analytics/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-segment-analytics
