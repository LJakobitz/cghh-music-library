<template>
  <v-layout column justify-center>
    <v-flex xs6>
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/songsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
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
