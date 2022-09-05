<script>
export default {
  name: 'Child',
  props:{
    value:{}
  },
  render(createElement){
    //console.log(this.$vnode.componentOptions.it.next().value)
    this.$slots.default[0].children[0].text = this.$parent._props.collection[this.$vnode.componentOptions.it.next().value].value

    return createElement('div', this.$slots.default)
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style scoped>

</style>
