<script>
import makeIterator from '@/services/makeIterator.js'
export default {
  name: 'ListParent',
  props: {
    collection: {},
  },
  render(createElement) {
    //let it = makeIterator(this.collection.length)
    return createElement('div', [
      ...this.collection.map((el, i) => {
        // перебирая коллекцию я хочу установить значение из коллекци в div(class='red')
        // который был передан в качестве слота в компонента Child
        // Однако из за того, что работа происходит с ссылками в итоге на каждоой итерации
        // изменяется значение text у div и в итоге остается значение из последней итерации
        //
        this.$slots.default[0].componentOptions.children[0].children[0].text = el.value
        return createElement('div', [this.$slots.default[0]])
      }),
    ])
  },
}
</script>

<style scoped>
</style>
