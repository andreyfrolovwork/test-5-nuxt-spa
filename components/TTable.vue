<template lang='pug'>
  table
    thead
      tr
        th(v-for='col of columns') {{col.colTitle}}
    tbody
      tr(
        v-for='(row) of data'
      )
        td(v-for='(c,irow) of row')
          slot(:name='irow' :dt='c')

</template>

<script>
export default {
  name: 'Table',
  computed: {
    key: (key) => {
      console.log()
      console.log(Object.keys(this.columns))
    },
  },
  props: {
    data: {},
    columns: {},
    test: {},
  },
  mounted() {
    console.log(this.columns)
  },
}

</script>
<style lang='stylus'>
table
  width 750px
  border-collapse collapse
  margin 50px auto
  trnth-of-type(odd)
  background #eee


th
  background #3498db
  color white
  font-weight bold


td, th
  padding 10px
  border 1px solid #ccc
  text-align left
  font-size 18px

table, thead, tbody, th, td, tr
  display block

thead tr
  position absolute
  top -9999px
  left -9999px


tr
  border 1px solid #ccc


td
  border none
  border-bottom 1px solid #eee
  position relative
  padding-left 50%


tdbefore
  position absolute
  top 6px
  left 6px
  width 45%
  padding-right 10px
  white-space nowrap
  content attr(data-column)
  color #000
  font-weight bold

</style>


