<script>
export default {
  name: 'Child',
  render(createElement){
    // с помощью итератора сможешь все сделать
    //debugger
    //console.log(this.$vnode.componentOptions.it.next().value)
    //this.$slots.default[0].children[0].text = this.$parent._props.collection[this.$vnode.componentOptions.it.next().value].value
    return createElement('div', this.$slots.default)
  },
}
</script>
