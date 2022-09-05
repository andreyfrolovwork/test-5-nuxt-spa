<template lang='pug'>
div(class='red') {{text}}
</template>

<script>
export default {
  name: 'CustomCell',
  props:{
    text:{}
  }
}
</script>

<style scoped>
.red {
  color:red;
}
</style>
