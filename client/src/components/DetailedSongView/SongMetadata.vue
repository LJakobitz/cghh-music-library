<template>
  <panel title="Song Metadata">
    <v-layout row wrap justify-center class="tile">
      <v-flex xs12 sm12 md6>
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
          @click="navigateTo({name: 'song-edit', params: {songID: song.id}})">
          Edit Details
        </v-btn>
      </v-flex>
      <v-flex xs12 sm12 md6>
        {{song.album}}
        <br>
        <img class="album-image" :src="song.albumImageURL" :alt=song.album />
        <div class="spotify-player" v-if="song.spotifyID">
          <iframe :src="'https://open.spotify.com/embed/track/' + song.spotifyID" width="65%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="css" scoped>
  .album-image{
    width: 65%;
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
  .tile{
    height: 405px;;
  }
</style>
