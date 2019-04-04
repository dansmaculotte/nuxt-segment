import Vue from 'vue'
import VueSegmentAnalytics from 'vue-segment-analytics'

const SEGMENT_SOURCE_ID = '<%= options.sourceId %>'
const SEGMENT_USE_ROUTER = <%= options.useRouter %>

export default function ({ app }) {

  const options = {
    id: SEGMENT_SOURCE_ID
  }

  if (SEGMENT_USE_ROUTER) {
    options.router = app.router;
  }

  Vue.use(VueSegmentAnalytics, options)

  Vue.prototype.$segment = window.analytics
}
