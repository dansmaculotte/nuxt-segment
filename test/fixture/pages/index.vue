<template>
  <div>
    Works!
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
    }
  }
</script>
