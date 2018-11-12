<template>
  <div class="Register">
    <p>REGISTER</p>
    <div class="form-container">
      <input id="email" type="email" v-model="email" placeholder="email">
      <br>
      <input id="password" type="password" v-model="password" placeholder="password"/>
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await authenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .form-container{
    text-align: left;
    margin-left: 25%;
    margin-right: 25%;
  }

  .form-container input{
      width:100%;
      float:left;
  }

</style>
