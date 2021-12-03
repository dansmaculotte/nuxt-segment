import Vue from 'vue'
import Segment from '@dansmaculotte/vue-segment'

const OPTIONS = '<%= JSON.stringify(options) %>'

export default function (context, inject) {
  const { app, store } = context

  const moduleOptions = JSON.parse(OPTIONS)

  const options = {
    writeKey: moduleOptions.writeKey,
    disabled: moduleOptions.disabled,
    settings: moduleOptions.settings,
  }

  if (options.useRouter && app.router) {
    options.router = app.router
  }

  Vue.use(Segment, options)

  if (store) {
    store.$segment = Vue.$segment
  }

  context.$segment = Vue.$segment

  if (Vue.$segment) {
    inject('segment', Vue.$segment)
  }
}
