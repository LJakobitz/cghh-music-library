<template>
  <div>
    <v-layout row justify-center>
      <v-flex xs12 sm6 md6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs12 sm6 md6 class="ml-2">
        <you-tube :youtubeID="song.youtubeID" />
      </v-flex>
    </v-layout>
    <v-layout row justify-center class="mt-2">
      <v-flex xs12 sm6 md6>
        <tab :song="song" />
      </v-flex>
      <v-flex xs12 sm6 md6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/songsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style lang="css" scoped>
</style>
