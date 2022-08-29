<template lang='pug'>
  div
    div(v-for='category of categories') {{category}}
</template>

<script>
export default {
  name: 'Header',
  props: {
    categories: {
      type: Array,
    },
  },
}
</script>

<style scoped>

</style>
