<template lang='pug'>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    if (!localStorage.getItem('login')) {
      this.$router.push('/login')
    } else {
      this.$router.push('/board')
    }
  },
}
</script>
<style lang='stylus' scoped>

</style>
