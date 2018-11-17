import Vue from 'vue'
import VueSegmentAnalytics from 'vue-segment-analytics'

export default function (context) {
  const options = <%= JSON.stringify(options) %>
  const router = options.useRouter && context.app ? context.app.router : undefined
  Vue.use(VueSegmentAnalytics, {
    id: options.id,
    router: router
  })
  Vue.prototype.$analytics = window.analytics
}
