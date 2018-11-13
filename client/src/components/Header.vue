<template>
    <v-toolbar fixed dark class="px-0 indigo darken-2">
        <span class="home" @click="navigateTo({name: 'home'})">
            <v-toolbar-title flat class="mt-3 ml-2 mr-2">
                TabTracker
            </v-toolbar-title>
        </span>
        <!-- TODO:IMPLEMENT
        <v-toolbar-items>
            <v-btn dark flat>
                Browse
            </v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" dark flat @click="navigateTo({name: 'login'})">
                Login
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" dark flat @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
