<template lang="pug">
  div test
    Item(:todo="todo")
</template>

<script>
import Item from '@/components/Item'

export default {
  name: "test",
  data() {
    return {
      todo: {title:"123"}
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped>

</style>
