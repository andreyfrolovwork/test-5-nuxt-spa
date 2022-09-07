<template>

</template>

<script>
//import { get } from 'lodash'

export default {
  name: 'Table',
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
/*  methods: {
    renderColumns(h, row, columnsOptions) {
      return columnsOptions.map((column, index) => {
        return h('td', { class: 'vu-table__tbody-td' }, [
          column.scopedSlot ? column.scopedSlot({row, items: this.rows}) : row[column.prop]
        ])
      })
    }
  },*/
  render(createElement) {
    return createElement('div','123')
/*
    const columnsOptions = this.$slots.default.filter(item => {
      return (item.componentOptions && item.componentOptions.tag === 'vu-table-column')
    }).map(column => {
      return Object.assign({}, column.componentOptions.propsData, {
          scopedSlot: get(column, 'data.scopedSlots.default')
        }
      )
    })

    const columnsHead = columnsOptions.map((column, index) => {
      return h('th', { class: 'vu-table__thead-th', key: index}, column.title)
    })

    const rows = this.rows.map((row, index) => {
      return h('tr', { key: index }, [ this.renderColumns(h, row, columnsOptions) ])
    })

    return h('table', { class: 'vu-table' }, [
      h('thead', { class: 'vu-table__thead' }, [
        h('tr', [ columnsHead ])
      ]),
      h('tbody', { class: 'vu-table__tbody' }, [ rows ])
    ])*/
  }
};
</script>

<style scoped>

</style>
