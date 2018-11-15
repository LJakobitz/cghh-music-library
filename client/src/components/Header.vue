<template>
  <v-toolbar fixed dark class="px-0 indigo darken-2">
      <router-link class="home" tag="span" :to="{name: 'home'}">
        <v-toolbar-title flat class="mt-3 ml-2 mr-2">
            TabTracker
        </v-toolbar-title>
      </router-link>
      <v-toolbar-items>
          <v-btn dark flat :to="{name: 'songs'}">
              Browse
          </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn v-if="!$store.state.isUserLoggedIn" dark flat :to="{name: 'login'}">
              Login
          </v-btn>
          <v-btn v-if="!$store.state.isUserLoggedIn" dark flat :to="{name: 'register'}">
              Sign Up
          </v-btn>
          <v-btn v-if="$store.state.isUserLoggedIn" dark flat @click="logout">
              Log Out
          </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="css" scoped>
    .home {
        cursor: pointer;
        height: 100%;
    }

    .home:hover {
        background-color: #5C6BC0;

    }
</style>
