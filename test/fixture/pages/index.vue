<template>
  <div>
    Works!
    <button @click="loadSegment">
      Load Segment
    </button>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$segment.identify('f4ca124298', {
      name: 'Michael Bolton',
      email: 'mbolton@initech.com'
    })
    this.$segment.track('Signed Up', { plan: 'Enterprise' })
    this.$segment.page()
  },
  methods: {
    loadSegment () {
      this.$segment.load(process.env.SEGMENT_WRITE_KEY)
    }
  }
}
</script>
