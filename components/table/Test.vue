<script>
export default {
  name: 'Test',
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  methods: {
    renderColumns(h, row, columnsOptions) {
      return columnsOptions.map((column, index) => {
        return h('td', { class: 'vu-table__tbody-td' }, [
          column.scopedSlot ? column.scopedSlot({ row, items: this.rows }) : row[column.prop],
        ])
      })
    },
  },
  render(createElement) {
    debugger

   /* const columnsOptions = this.$slots.default.filter(item => {
      return (item.componentOptions && item.componentOptions.tag === 'vu-table-column')
    }).map(column => {
      return Object.assign({}, column.componentOptions.propsData, {
          scopedSlot: get(column, 'data.scopedSlots.default'),
        },
      )
    })
*/
    /*    const columnsHead = columnsOptions.map((column, index) => {
          return createElement('th', { class: 'vu-table__thead-th', key: index }, column.title)
        })

        const rows = this.rows.map((row, index) => {
          return createElement('tr', { key: index }, [this.renderColumns(h, row, columnsOptions)])
        })

        return createElement('table', { class: 'vu-table' }, [
          createElement('thead', { class: 'vu-table__thead' }, [
            createElement('tr', [columnsHead]),
          ]),
          createElement('tbody', { class: 'vu-table__tbody' }, [rows]),
        ])*/
  },
}
</script>

<style scoped>

</style>
