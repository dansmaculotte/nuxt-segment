const { resolve } = require('path')

export default function (moduleOptions) {
  const options = Object.assign(
    {
      sourceId: process.env.SEGMENT_SOURCE_ID || '',
      useRouter: process.env.SEGMENT_USE_ROUTER || true
    },
    this.options.segment,
    moduleOptions
  )

  const pluginOpts = {
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'segment/plugin.js',
    ssr: false,
    options
  }

  this.addPlugin(pluginOpts)
}
