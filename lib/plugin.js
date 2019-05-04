import Vue from 'vue'
import Segment from '@dansmaculotte/vue-segment'

const SEGMENT_WRITE_KEY = '<%= options.writeKey %>'
const SEGMENT_DISABLED = <%= options.disabled %>
const SEGMENT_USE_ROUTER = <%= options.useRouter %>

export default function ({ app }) {

  const options = {
    id: SEGMENT_WRITE_KEY,
    disabled: SEGMENT_DISABLED
  }

  if (SEGMENT_USE_ROUTER) {
    options.router = app.router;
  }

  Vue.use(Segment, options)
}
