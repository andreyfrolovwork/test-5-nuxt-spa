<template lang='pug'>
  div(v-if='user.isEdit')
    div(class='card')
      div(class='card-item-thin')
        a-button( type='primary' v-on:click='edit(user.key)') edit
      div(class='card-item-thin ') Login:
        input(v-model='user.login')
      select(v-model='user.role')
        option admin
        option manager
        option user
      div(class='card-item-thin') Password:
        input(v-model='user.password')
      button(v-on:click='save(user.key)') save
      button(v-on:click='cancel(user.key)') cancel
  div(v-else)
    div(class='card')
      div(class='card-item-thin')
        a-button( type='primary' v-on:click='edit(user.key)') edit
      div(class='card-item-thin ') Login:
        div(class='card-item') {{user.login}}
      div(class='card-item-thin') Role:
      div(class='card-item') {{user.role}}
      div(class='card-item-thin') Password:
      div(class='card-item') {{user.password}}
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
    },
    isAdmin: {},
  },
  data() {
    return {
      newUser: {
        id: 0,
        login: '',
        password: '',
        role: '',
      },
    }
  },
  methods: {

    save(key) {
      this.$emit('save-user', key)
    },
    edit(key) {
      this.$emit('edit-user', key)
    },
    cancel(key) {
      this.$emit('cancel-user', key)
      console.log(key)
    },
  },
  mounted() {
    console.log(this.isAdmin)
    console.log('this.user', this.user)
    this.newUser = {
      ...this.user,
    }
    console.log(this.newUser)
  },
}
</script>

<style lang='stylus' scoped>
.card
  display flex
  margin 30px
  padding 10px
  box-shadow 4px 4px 8px 0px rgba(34, 60, 80, 0.2)

.card-item
  display flex
  justify-content center
  align-items center
  padding 10px
  color rgba(0, 0, 0, 0.85)
  font-weight: 500

.card-item-thin
  display flex
  justify-content center
  align-items center
  padding 10px
  color rgba(0, 0, 0, 0.85)
  font-weight: 200

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

.thin
  font-weight: 200;

</style>
