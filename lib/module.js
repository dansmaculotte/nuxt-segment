const { resolve } = require('path')

export default function (moduleOptions) {
  const { publicRuntimeConfig } = this.nuxt.options

  const options = Object.assign(
    {
      writeKey: process.env.SEGMENT_WRITE_KEY || publicRuntimeConfig.SEGMENT_WRITE_KEY,
      disabled: process.env.SEGMENT_DISABLED || publicRuntimeConfig.SEGMENT_DISABLED || false,
      useRouter: process.env.SEGMENT_USE_ROUTER || publicRuntimeConfig.SEGMENT_USE_ROUTER || true,
      settings: {},
    },
    this.options.segment,
    moduleOptions,
  )

  const pluginOpts = {
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-segment.js',
    ssr: false,
    options,
  }

  this.addPlugin(pluginOpts)
}
