<template>
  <v-layout row justify-center>
    <v-flex xs4>
      <songs-favorites />
      <songs-recent class="mt-2" />
    </v-flex>
    <v-flex xs8 class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/songsService'
import SongsPanel from './SongsPanel'
import SongsRecent from './SongsRecent'
import SongsSearchPanel from './SongsSearchPanel'
import SongsFavorites from './SongsFavorites'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsFavorites,
    SongsRecent
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style lang="css" scoped>
  .song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .album-image{
    width: 50%;
    margin: 0 auto;
  }
  .song-title{
    font-size: 30px;
  }
  .song-artist{
    font-size: 24px;
  }
  .song-album{
    font-size: 18px;
  }
</style>
