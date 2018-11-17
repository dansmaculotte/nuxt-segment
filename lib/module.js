const { resolve } = require('path')

export default function (moduleOptions) {
  const options = Object.assign({ id: '', useRouter: true }, this.options.analytics, moduleOptions)
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'module.js',
    ssr: false,
    options: options
  })
}

module.exports.meta = require('../package.json')
