<script>
import makeIterator from '@/services/makeIterator.js'
export default {
  name: 'ListParent',
  props: {
    collection: {},
  },
  render(createElement, context) {
    debugger
  }
  /*render(createElement) {
    let it = makeIterator(this.collection.length)
    return createElement('div', [
      ...this.collection.map((el, i) => {

        /!*if (el.color === 'red') {
          return createElement('div', [this.$slots.default[0]])
        }
        if (el.color === 'blue') {
          return createElement('div', [this.$slots.default[1]])
        }
        if (el.color === 'green') {
          return createElement('div', [this.$slots.default[2]])
        }*!/
        //debugger
        //console.log('next',it.next().value)
        debugger
        this.$slots.default[0].componentOptions.children[0].children[0].text
        this.$slots.default[1].componentOptions.it = it
        this.$slots.default[1].componentOptions.index = i
        return createElement('div', [this.$slots.default[0]])
      }),
    ])
  },*/
  /* render(){
     return <div>{this.$slots.default}</div>
   }*/
}
</script>

<style scoped>
</style>
