import Vue from 'vue'
import Segment from '@dansmaculotte/vue-segment'

const SEGMENT_WRITE_KEY = '<%= options.writeKey %>'
const SEGMENT_DISABLED = <%= options.disabled %>
const SEGMENT_USE_ROUTER = <%= options.useRouter %>
const SEGMENT_SETTINGS = <%= JSON.stringify(options.settings) %>

export default function ({ app }) {

  const options = {
    writeKey: SEGMENT_WRITE_KEY,
    disabled: SEGMENT_DISABLED,
    settings: SEGMENT_SETTINGS
  }

  if (SEGMENT_USE_ROUTER) {
    options.router = app.router;
  }

  Vue.use(Segment, options)
}
