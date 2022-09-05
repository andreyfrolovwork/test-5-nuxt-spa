<template lang='pug'>
  div
    TTable(
      :data='rows'
      :columns='columns'
    )
      template(#id='props')
        div(class='bold') {{props.dt}}
      template(#title='props')
        div(class='text') {{props.dt}}
      template(#price='props')
        div(class='price') {{props.dt}}
      template(#description='props')
        div(class='text') {{props.dt}}
      template(#category='props')
        div(class='text') in{{props.dt}}
      template(#image='props')
        div(class='img-div')
          img(:src='props.dt' class='card-img')

</template>

<script>
import TTable from '@/components/TTable.vue'

export default {
  data() {
    return {
      columns: [{
        colTitle: 'id',
        colKey: 'id',
      },
        {
          colTitle: 'title',
          colKey: 'title',
        },
        {
          colTitle: 'price',
          colKey: 'price',
        },
        {
          colTitle: 'description',
          colKey: 'description',
        },
        {
          colTitle: 'category',
          colKey: 'category',
        },
        {
          colTitle: 'image',
          colKey: 'image',
        },
      ],
      rows: [
        {
          'id': 1,
          'title': 'bag1',
          'price': '109.952',
          'description': 'Your perfect pack for 23everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          'category': 'men\'s clothing',
          'image': 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        },
        {
          'id': 2,
          'title': '2',
          'price': '109.9532',
          'description': 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          'category': 'men\'s clothing',
          'image': 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',

        },
        {
          'id': 3,
          'title': '3',
          'price': '55.994',
          'description': 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
          'category': 'men\'s clothing',
          'image': 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',

        },

      ],
    }
  },
  components: {
    TTable,


  },
}
</script>
<style lang='stylus'>
.bold
  font-weight bold


.price
  color #d14
  font-size 20px
  font-weight 700

.img-div
  display flex
  flex-shrink 0
  max-height 200px
  max-width 200px
  margin-right 10px
  justify-content center

.card-img
  max-width 100%
  object-fit contain
  height 100%

</style>
