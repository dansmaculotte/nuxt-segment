import Vue from 'vue'
import Segment from '@dansmaculotte/vue-segment'

const DEFAULT_USE_ROUTER = true

function checkIfBoolean (param) {
  return typeof param === 'boolean'
}

function moduleOptionRouter(moduleOptions) {
  return checkIfBoolean(moduleOptions.useRouter) ? moduleOptions.useRouter : undefined
}

function configOptionRouter($config) {
  return checkIfBoolean($config.SEGMENT_USE_ROUTER) ? $config.SEGMENT_USE_ROUTER : undefined
}

function shouldUseRouter(moduleOptions, $config) {
  return moduleOptionRouter(moduleOptions) || configOptionRouter($config) || DEFAULT_USE_ROUTER
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

  const useRouter = shouldUseRouter(moduleOptions, $config)

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
