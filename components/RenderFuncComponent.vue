<script>
export default {
  name: 'RenderFuncComponent',
  props: {
    collection: {},
    text: {},
  },
  computed: {},
  methods: {
    clickHandle: function(e) {
      console.log('click', e)
    },
  },
  render(createElement) {
    this.$slots.default.map((slot) => {
      slot.componentOptions.propsData.collection = this.collection
    })
      /*this.$slots.default[0].componentOptions.propsData.text = 'new text'*/
/*    this.$slots.default[0].componentOptions.propsData.data = this.collection[0]*/
    return(<div>
      <table>
        <thead>
        <tr>
          {Object.keys(this.collection[0]).map((key) => {
            return <th>{key}</th>
          })}
        </tr>
        </thead>
        <tbody>
        {
          this.collection.map((row, i) => {
            return <tr>{Object.keys(row).map((key) => {
              return this.$slots.default.map((slot) => {
                if(slot.componentOptions.propsData.field === key){
           /*       slot.componentOptions.propsData.cellData = row[key] + 'add cell'
                  slot.componentOptions.propsData.isHeader = false*/
                  //return <td>{slot}</td>
                  return <td>{row[key]}</td>
                }
              })
            })}</tr>
          })
        }
        </tbody>
      </table>
      <button onClick={(e) => {
        this.$forceUpdate()
      }}>123
      </button>
    </div>)
  },
  /*  render: function (createElement) {
      return createElement(
        'div',   // имя тега
        this.$slots.default // массив дочерних элементов
      )
    },*/
  /*
  render(createElement){
    console.log(this)
    return createElement('div',{},'hello world')
  },*/
  mounted() {
    console.log(this)
  },
}
</script>

<style scoped>

</style>
<!--
<script>
export default {
  name: 'RenderFuncComponent',
  props: {
    collection: {},
    text: {},
  },
  computed: {},
  methods: {
    clickHandle: function(e) {
      console.log('click', e)
    },
  },
  render() {
    this.$slots.default[0].componentOptions.propsData.text = 'new text'

    let slots = this.$slots.default[0]

    debugger

    return(<div>
      <table>
        {slots}
        <thead>
        <tr>
          {Object.keys(this.collection[0]).map((key) => {
            return <th>{key}</th>
          })}
        </tr>
        </thead>
        <tbody>
        {
          this.collection.map((row, i) => {
            return <tr>{Object.keys(row).map((key) => {
              return <td>{row[key]}</td>
            })}</tr>
          })
        }
        </tbody>
      </table>
      <button onClick={(e) => {
        this.$forceUpdate()
      }}>123
      </button>
    </div>)
  },
  /*  render: function (createElement) {
      return createElement(
        'div',   // имя тега
        this.$slots.default // массив дочерних элементов
      )
    },*/
  /*
  render(createElement){
    console.log(this)
    return createElement('div',{},'hello world')
  },*/
  mounted() {
    console.log(this)
  },
}
</script>

<style scoped>

</style>
-->
