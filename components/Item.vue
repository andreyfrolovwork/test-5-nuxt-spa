<template>
  <div>{{todo.title}}</div>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo:{
      type:Object
    }
  }
}
</script>

<style scoped>

</style>
