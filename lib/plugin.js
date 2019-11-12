import Vue from 'vue'
import Segment from '@dansmaculotte/vue-segment'

const SEGMENT_WRITE_KEY = '<%= options.writeKey %>'
const SEGMENT_DISABLED = <%= options.disabled %>
const SEGMENT_USE_ROUTER = <%= options.useRouter %>
const SEGMENT_SETTINGS = <%= JSON.stringify(options.settings) %>

export default function (context, inject) {

  const options = {
    writeKey: SEGMENT_WRITE_KEY,
    disabled: SEGMENT_DISABLED,
    settings: SEGMENT_SETTINGS
  }

  if (SEGMENT_USE_ROUTER) {
    options.router = context.app.router
  }

  Vue.use(Segment, options)

  return new Promise((resolve) => {
    Vue.$segment.ready(() => {
      context.$segment = Vue.$segment
      inject('segment', Vue.$segment)
      resolve()
    })
  })

}
