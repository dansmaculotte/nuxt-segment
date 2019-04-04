# nuxt-segment

[![David-DM][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

> NuxtJS module for Segment Analytics

This module uses [vue-segment-analytics](https://github.com/Kapiche/vue-segment-analytics) to add Segment Analytics to a Nuxt.js app.
You can make called with `this.$segment.track()`.

## Setup

- Add `nuxt-segment` dependency using yarn or npm to your project
- Add `nuxt-segment` to `modules` section of `nuxt.config.js`

## Usage
### nuxt.config.js
```js
{
  modules: [
    'nuxt-segment'
  ],

  segment: {
    sourceId: '',
    useRouter: true
  }
}
```

## Options

### sourceId

- Type: `String`
  - Default: `process.env.SEGMENT_SOURCE_ID || ''`

### useRouter

- Type: `Boolean`
  - Default: `process.env.SEGMENT_USE_ROUTER || true`

### YourComponent.vue
```js
export default {
  mounted () {
    this.$segment.identify('f4ca124298', {
      name: 'Michael Bolton',
      email: 'mbolton@initech.com'
    });
    this.$segment.track('Signed Up', { plan: 'Enterprise' });
    this.$segment.page('Pricing');
  }
}
```

## Development

- Clone this repository
- Install dependencies using `yarn install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE.md)

<!-- Badges -->
[david-dm-src]: https://david-dm.org/dansmaculotte/nuxt-segment/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dansmaculotte/nuxt-segment
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
[npm-version-src]: https://img.shields.io/npm/dt/@dansmaculotte/nuxt-segment.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dansmaculotte/nuxt-segment
[npm-downloads-src]: https://img.shields.io/npm/v/@dansmaculotte/nuxt-segment/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dansmaculotte/nuxt-segment
