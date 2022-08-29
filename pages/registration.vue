<template lang='pug'>
  div(class='loginform')
    NuxtLink(to='/login') Go to login
    div Registration. Enter login and password.
    form(@submit.prevent='onSubmit')
      div Login
      input(type='text' v-model='form.login')
      br
      div Password
      input(type='text' v-model='form.password')
      div Select role
      select(v-model="selectedRole")
        option admin
        option manager
        option user
      br
      br
      button(type='submit') registration
      div {{selected}}

</template>

<script>
export default {
  data() {
    return {
      form: {
        login: '',
        password: '',
        selectedRole: 'user',
      },
      user: {},
      value1: '',
    }
  },
  methods: {
    async onSubmit() {
      console.log('регистрация')
      let res = await fetch('http://localhost:4000/users', {
        method: 'POST',
        body: new URLSearchParams({
          login: this.form.login,
          password: this.form.password,
          role: this.form.selectedRole,
        }),
      }).then((res) => {
        if (res.status === 201 && res.statusText === 'Created') {
          alert('Вы успешно зарегистрировались')
          this.$router.push('/login')
        }
      })

      console.log(res)
      if (this.form.login === 'admin' && this.form.password === 'pass') {
        this.user.role = 'admin'
      }
      if (this.form.login === 'admin' && this.form.password === 'pass') {
        this.user.role = 'admin'
      }
      console.log(this.form)
      console.log('submit')
    },
  },
}
</script>

<style lang='stylus' scoped>
.loginform
  display flex
  justify-content center
  align-items center
  height 100vh
  width 100vw
  flex-direction column
</style>

