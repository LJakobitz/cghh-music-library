<template>
  <v-layout row justify-center>
    <div class="white elevation-2 flex xs12 sm8 md4">
      <v-toolbar flat dense class="indigo darken-2" dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          v-model="password"
        ></v-text-field>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <v-btn dark class="indigo darken-2"
          @click="login">
          Login
        </v-btn>
      </div>
    </div>
  </v-layout>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await authenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="css" scoped>

.error {
  color: red;
}

</style>
