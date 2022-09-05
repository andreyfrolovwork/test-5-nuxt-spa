<template lang='pug'>
  div 123
    h1 example.vue
    ListParent(:collection='arr')
      Child
        template
          div(class='red') text in red div
      Child
        template
          div(class='blue') text in blue div
      Child
        template
          div(class='green') text in green div
</template>

<script>
import ListParent from '@/components/ListParent.vue'
import Child from '@/components/Child.vue'

export default {
  name: 'example',
  data() {
    return {
      arr: [
        { color: 'red', value: '0 red value' },
        { color: 'blue', value: '1 blue value' },
        { color: 'green', value: '2 green value' },
        { color: 'red', value: '3 red value' },
        { color: 'blue', value: '4 blue value' },
        { color: 'green', value: '5 green value' },
      ],

    }
  },
  components: {
    ListParent,
    Child,
  },
}
</script>

<style scoped>
.red {
  color: red
}

.blue {
  color: blue
}

.green {
  color: green
}

</style>
