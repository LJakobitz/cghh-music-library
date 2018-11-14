<template>
  <panel title="Songs">
    <v-btn slot="action" @click="navigateTo({name: 'songs-create'})" class="indigo accent-2" light small absolute right middle fab>
      <v-icon>
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
            @click="navigateTo({name: 'song', params: {songID: song.id}})">
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
