<template lang='pug'>
div parent
  slot
</template>

<script>
export default {
  name: 'Parent',
  props:{
    data:{}
  },
  methods:{


  },
  mounted(){
    console.log('mounted')
    console.log(this)
  }
}

</script>

<style scoped>

</style>
