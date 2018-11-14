<template>
  <v-layout row justify-center>
    <panel title="Register">
      <form name="tab-tracker-form" autocomplete="off">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>
      </form>
      <br>
      <div class="error" v-html="error"/>
      <br>
      <v-btn dark class="indigo darken-2"
        @click="register">
        Register
      </v-btn>
    </panel>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
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
        const response = await authenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style lang="css" scoped>

.error {
  color: white;
}

</style>
