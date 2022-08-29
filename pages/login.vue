<template lang='pug'>
  div(class='loginform')
    NuxtLink(to="/registration") Go to registration
    div Enter login and password
    form(@submit.prevent='onSubmit')
      div Password
      input(type='text' v-model='form.login')
      br
      div Login
      input(type='text' v-model='form.password')
      br
      br
      button(type='submit') login

</template>

<script>
export default {
  data: () => {
    return {
      form: {
        login: '',
        password: '',
      },
      user: {},
    }
  },

  methods: {
    async onSubmit() {
      console.log(this.form)
      let res = await fetch('http://localhost:4000/users?' + new URLSearchParams({
        login: this.form.login,
        password: this.form.password,
      })).then((res) => res.json()).then((user) => {
        if (user.length === 0) {
          alert('Login or password incorrect')
        } else if (user[0].role === 'admin' || user[0].role === 'manager') {
          localStorage.setItem('login', user[0].login)
          localStorage.setItem('role', user[0].role)
          this.$router.push('/board')
        } else if (user[0].role === 'user') {
          localStorage.setItem('login', user[0].login)
          localStorage.setItem('role', user[0].role)
          this.$router.push('/board')
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
