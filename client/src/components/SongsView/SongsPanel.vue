<template>
  <panel title="Songs">
    <v-btn slot="action" :to="{name: 'songs-create'}" class="indigo accent-2" dark small absolute right middle icon>
      <v-icon white>
        add
      </v-icon>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm8 md7>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-album">
            {{song.album}}
          </div>
          <v-btn dark class="indigo accent-2"
            :to="{name: 'song', params: {songId: song.id}}">
            View Details
          </v-btn>
        </v-flex>
        <v-flex xs12 sm4 md5>
          <img class="album-image" :src="song.albumImageURL" :alt=song.album />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/songsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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
