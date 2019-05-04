# nuxt-segment

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Nuxt.js module for Segment Analytics

This module uses [vue-segment](https://github.com/dansmaculotte/vue-segment) to add Segment Analytics to a Nuxt.js app.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

- Add `@dansmaculotte/nuxt-segment` dependency using yarn or npm to your project
- Add `@dansmaculotte/nuxt-segment` to `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    '@dansmaculotte/nuxt-segment',

    // With options
    [
      '@dansmaculotte/nuxt-segment',
      { /* module options */ }
    ],
  ],

  // Or with global options
  segment: {
    writeKey: '',
    disabled: false,
    useRouter: true
  }
}
```

## Options

### writeKey

- Type: `String`
  - Default: `process.env.SEGMENT_WRITE_KEY || ''`

### disabled

- Type: `Boolean`
  - Default: `process.env.SEGMENT_DISABLED || false`

### useRouter

- Type: `Boolean`
  - Default: `process.env.SEGMENT_USE_ROUTER || true`

## Usage

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
[npm-version-src]: https://img.shields.io/npm/dt/@dansmaculotte/nuxt-segment.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dansmaculotte/nuxt-segment

[npm-downloads-src]: https://img.shields.io/npm/v/@dansmaculotte/nuxt-segment/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dansmaculotte/nuxt-segment

[david-dm-src]: https://david-dm.org/dansmaculotte/nuxt-segment/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dansmaculotte/nuxt-segment

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
