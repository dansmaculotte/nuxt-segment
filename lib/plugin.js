import Vue from 'vue'
import Segment from '@dansmaculotte/vue-segment'

function checkIfBoolean (param) {
  return typeof param === 'boolean'
}

const OPTIONS = '<%= JSON.stringify(options) %>'

export default function (context, inject) {
  const { app, store, $config } = context

  const moduleOptions = JSON.parse(OPTIONS)

  const options = {
    writeKey: moduleOptions.writeKey || ($config && $config.SEGMENT_WRITE_KEY),
    disabled: moduleOptions.disabled || ($config && $config.SEGMENT_DISABLED) || false,
    settings: moduleOptions.settings,
  }

  const useRouter =
    checkIfBoolean(moduleOptions.useRouter)
      ? moduleOptions.useRouter
      : checkIfBoolean($config.SEGMENT_USE_ROUTER)
        ? $config.SEGMENT_USE_ROUTER
        : true

  if (useRouter && app.router) {
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
