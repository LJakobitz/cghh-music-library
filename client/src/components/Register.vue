<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="email" />
          <br>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="password"/>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn
            @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await authenticationService.register({
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
