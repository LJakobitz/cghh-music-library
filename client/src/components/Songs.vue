<template>
  <v-layout row justify-center>
    <panel title="Songs">
      <v-btn slot="action" @click="navigateTo({name: 'songs-create'})" class="indigo accent-2" light small absolute right middle fab>
        <v-icon>
          add
        </v-icon>
      </v-btn>
      <div v-for="song in songs" :key="song.id">
        {{song.title}} --
        {{song.artist}} --
        {{song.album}}
      </div>
    </panel>
  </v-layout>
</template>

<script>
import SongsService from '@/services/songsService'
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style lang="css" scoped>
</style>
