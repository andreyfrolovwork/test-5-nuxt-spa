<template lang='pug'>
  div
    div(class='header-title')
      h1 Users
    div(class='header')
      div(class='header-item')
        NuxtLink(to="/board") Edit catalog
      div(class='header-item')
        a-button(v-on:click='exit') exit
      div(class='header-item')
        h3 You entered as {{login}}
    User(
      v-for='user of users'
      :user='user'
      v-on:edit-user="edit($event)"
      v-on:cancel-user="cancel($event)"
      v-on:save-user="save($event)"
    )
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'users',
  data() {
    return {
      users: [{
        id: 0,
        login: '',
        password: '',
        role: '',
      },
      ],
    }
  },
  computed: {
    login: () => {
      return localStorage.getItem('login')
    },
  },
  methods: {
    async save(key) {
      await this.changeUser(key).then((res) => console.log(res))
      this.users.forEach((pr, i) => {
        if (pr.key === key) {
          console.log('treu')
          this.users[i].isEdit = false
        }
      })
    },
    async cancel(key) {
      await this.getUsers()
      this.users.forEach((pr, i) => {
        if (pr.key === key) {
          this.users[i].isEdit = false
        }
      })
    },
    edit(key) {
      console.log(this.users)
      console.log('edit', key)
      this.users.forEach((pr, i) => {
        if (pr.key === key) {
          console.log('treu')
          this.users[i].isEdit = true
        }
      })
    },
    exit() {
      console.log('exit')
      localStorage.removeItem('login')
      localStorage.removeItem('role')
      this.$router.push('/login')
    },
    async getUsers() {
      return fetch('http://localhost:4000/users?_sort=id&_order=ASC', {
        method: 'GET',
      }).then(res => {
        return res.json()
      }).then((users) => {
        this.users = users.map((pr, i) => {
          return {
            ...pr,
            isEdit: false,
            key: i,
          }
        })
      })
    },
    async changeUser(key) {
      let editedUser
      this.users.forEach((pr, i) => {
        if (pr.key === key) {
          editedUser = JSON.parse(JSON.stringify(this.users[i]))
        }
      })
      return fetch('http://localhost:4000/users/' + editedUser.id, {
        method: 'PATCH',
        body: new URLSearchParams({
          ...editedUser,
        }),
      })

    },
  },
  async mounted() {
    if (localStorage.getItem('role') !== 'admin') {
      this.$router.push('/login')
    }
    console.log('start fetch users')
    await this.getUsers()
  },
  components: {
    User,
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

