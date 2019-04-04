import Vue from 'vue'
import VueSegmentAnalytics from 'vue-segment-analytics'

const SEGMENT_WRITE_KEY = '<%= options.writeKey %>'
const SEGMENT_USE_ROUTER = <%= options.useRouter %>

export default function ({ app }) {

  const options = {
    id: SEGMENT_WRITE_KEY
  }

  if (SEGMENT_USE_ROUTER) {
    options.router = app.router;
  }

  Vue.use(VueSegmentAnalytics, options)
}
