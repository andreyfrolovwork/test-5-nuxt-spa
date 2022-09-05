<script>
import { h } from 'vue'
export default {
  name: 'TableColumnComponent',
  props:{
    field:{},
    data:{}
  },
  /*render(){
/!*    debugger
    return h('div', this.data[this.field])*!/
/!*    debugger
    this.$slots.default[0].children[0].text = this.data[this.field]*!/
      debugger
    return this.$scopedSlots.default[0]
  },*/

  // если передаем template c #label
  //  то это темплейте header
  // если передаем template c #default
  //  то это кастомный компонент ячейки
  // если передаем просто с филд и лабел
  // то отрисовываем div c field и label с переданными в пропсах.
  render: function (createElement) {
    debugger
    return createElement('div', this.$options.propsData.cellData)
/*
    console.log(this.$options.propsData.isHeader)
    if(this.$options.propsData.isHeader){
      return createElement('div', this.$options.propsData.cellData)
    } else return createElement('h1', this.$options.propsData.cellData)
*/

  },
/*  render: function (createElement) {
    debugger
    // `<div><slot :text="message"></slot></div>`
    return createElement('div', [
      this.$scopedSlots.default({
        text: this.message
      })
    ])
  },*/
  mounted(){
    console.log('tol',this)
  }
}
</script>

<style scoped>

</style>
