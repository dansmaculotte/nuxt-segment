<template>
  <div>
    Test
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$analytics.identify('f4ca124298', {
        name: 'Michael Bolton',
        email: 'mbolton@initech.com'
      })
      this.$analytics.track('Signed Up', { plan: 'Enterprise' })
      this.$analytics.page()
    }
  }
</script>
