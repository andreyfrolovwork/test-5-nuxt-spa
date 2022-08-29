<template lang='pug'>
  div
    div(class='header-title')
      h1 Catalog
    div(class='header')
      div(v-if='isAdmin' class='header-item')
        NuxtLink(to="/users") Edit users
      div(class='header-item')
        a-button(v-on:click='exit') exit
      div(class='header-item')
        h3 You entered as {{login}}
    div(class='categories')
      div(v-for='cat of categories' v-on:click='clickHandle' class='category')
        h3 {{cat}}
    Card(
      v-for='product of products'
      :product='product'
      :isAdminOrManager='isAdminOrManager'
      v-on:edit-card="edit($event)"
      v-on:cancel-card="cancel($event)"
      v-on:save-card="save($event)"
    )

</template>

<script>
import Card from '@/components/Card'

const isUser = 'user' === 'user'

export default {
  name: 'board',
  data() {
    return {
      categories: ['one', 'two', 'three'],
      products: [{
        'id': 0,
        'title': '',
        'price': 0,
        'description': '',
        'category': '',
        'image': '',
        'rate': 0,
        'count': 0,
      },
      ],
    }
  },
  computed: {
    isAdminOrManager: () => {
      if (localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'manager') {
        return true
      } else {
        return false
      }
    },
    isAdmin: () => {
      if (localStorage.getItem('role') === 'admin') {
        return true
      } else {
        return false
      }
    },
    login: () => {
      return localStorage.getItem('login')
    },
  },
  methods: {
    async save(key) {
      await this.changeProduct(key).then((res) => console.log(res))
      this.products.forEach((pr, i) => {
        if (pr.key === key) {
          console.log('treu')
          this.products[i].isEdit = false
        }
      })
    },
    async cancel(key) {
      await this.getAllProducts()
      this.products.forEach((pr, i) => {
        if (pr.key === key) {
          this.products[i].isEdit = false
        }
      })
    },
    edit(key) {
      console.log(this.products)
      console.log('edit', key)
      this.products.forEach((pr, i) => {
        if (pr.key === key) {
          console.log('treu')
          this.products[i].isEdit = true
        }
      })
    },
    exit() {
      console.log('exit')
      localStorage.removeItem('login')
      localStorage.removeItem('role')
      this.$router.push('/login')
    },
    async clickHandle(e) {
      console.log(e.target.textContent)
      if (e.target.textContent === 'All') {
        await this.getAllProducts()
        console.log(e.target.textContent)
      } else {
        console.log(e.target.textContent)
        await this.getProductsWithCategory(e.target.textContent)
      }

    },
    async getAllProducts() {
      return fetch('http://localhost:4000/products?_sort=id&_order=ASC', {
        method: 'GET',
      }).then(res => {
        return res.json()
      }).then((products) => {
        this.products = products.map((pr, i) => {
          return {
            ...pr,
            isEdit: false,
            key: i,

          }
        })
        this.categories = [
          'All',
          ...products.reduce((acc, item) => {
            if (acc.includes(item.category)) {
              return acc // если значение уже есть, то просто возвращаем аккумулятор
            }
            return [...acc, item.category] // добавляем к аккумулятору и возвращаем новый аккумулятор
          }, []),
        ]
      })
    },
    async getProductsWithCategory(category) {
      return fetch('http://localhost:4000/products?' + new URLSearchParams({
        category: category,
      }), {
        method: 'GET',
      }).then(res => {
        return res.json()
      }).then((products) => {
        console.log(products)
        this.products = products.map((pr, i) => {
          return {
            ...pr,
            isEdit: false,
            key: i,

          }
        })
      })
    },
    async changeProduct(key) {
      let editedProduct
      this.products.forEach((pr, i) => {
        if (pr.key === key) {
          editedProduct = JSON.parse(JSON.stringify(this.products[i]))
        }
      })
      return fetch('http://localhost:4000/products/' + editedProduct.id, {
        method: 'PATCH',
        body: new URLSearchParams({
          ...editedProduct,
        }),
      })

    },
  },

  async mounted() {
    if (!localStorage.getItem('login')) {
      this.$router.push('/login')
    }
    console.log('start fetch products')
    await this.getAllProducts()
  },
  components: {
    Card,
  },
}
</script>

<style lang='stylus' scoped>
.categories
  display flex
  flex-direction row
  justify-content space-between
  margin-right 30px
  margin-left 30px
  margin-bottom 10px
  margin-top 10px

.category
  display flex
  box-shadow 4px 4px 8px 0px rgba(34, 60, 80, 0.2)
  padding 10px

.header
  display flex
  flex-direction row
  padding 20px

.header-item
  padding 10px

.header-title
  padding-top 30px
  padding-left 30px

</style>
