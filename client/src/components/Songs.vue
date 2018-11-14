<template>
  <v-layout row justify-center>
    <panel title="Songs">
      <div v-for="song in songs" :key="song.id">
        {{song.title}} --
        {{song.artist}} --
        {{song.album}}
      </div>
    </panel>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  mounted() {
    //do a request to the Backend
  }
}
</script>

<style lang="css" scoped>
</style>
