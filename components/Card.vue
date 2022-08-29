<template lang='pug'>
  div(v-if='product.isEdit')
    div(class='card')
      div(class='img-div')
        input(v-model="product.image")
      div
        div
          input(v-model='product.title')
        div
          input(v-model='product.price')
        input(v-model='product.description')
        input(v-model='product.rate')
        input(v-model='product.count')
        button(v-on:click='saveInCard(product.key)') save
        button(v-on:click='cancelInCard(product.key)') cancel
  div(v-else)
    div(class='card')
      div(class='img-div')
        img(:src='product.image' class='card-img')
      div
        div
          h1 {{product.title}}
        div
          h2 {{product.price}} $
        div {{product.description}}
        h3 {{product.rate}} rate
        h3 {{product.count}} count
        a-button(type='primary' v-if='isAdminOrManager' v-on:click='editInCard(product.key)') edit
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: {
      type: Object,
    },
    isAdminOrManager: {},
  },
  data() {
    return {
      newProduct: {
        id: 17,
        title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        description: 'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.',
        category: 'women\'s clothing',
        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        rate: 3.8,
        count: 679,

      },
    }
  },
  methods: {
    saveInCard(key) {
      this.$emit('save-card', key)
    },
    editInCard(key) {
      this.$emit('edit-card', key)
    },
    cancelInCard(key) {
      this.$emit('cancel-card', key)
      console.log(key)
    },
  },
  mounted() {
    console.log(this.isAdminOrManager)
    console.log('this.product', this.product)
    this.newProduct = {
      ...this.product,
    }
    console.log(this.newProduct)
  },
}
</script>

<style lang='stylus' scoped>
.card
  display flex
  margin 30px
  padding 20px
  box-shadow 4px 4px 8px 0px rgba(34, 60, 80, 0.2)


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
<!--
{
"id": 3,
"title": "Mens Cotton Jacket",
"price": 55.99,
"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
"rating": {
"rate": 4.7,
"count": 500
}
-->
