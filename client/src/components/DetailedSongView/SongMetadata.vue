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
          :to="{name: 'song-edit', params () { return {songId: song.id}}}">
          Edit Details
        </v-btn>
        <v-btn class="indigo accent-2" v-if="isUserLoggedIn && !favorite" @click="setAsFavorite" fab>
          <v-icon color="grey lighten-2">
            favorite_border
          </v-icon>
        </v-btn>
        <v-btn class="indigo accent-2" v-if="isUserLoggedIn && favorite" @click="unSetAsFavorite" fab>
          <v-icon color="red">
            favorite
          </v-icon>
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
import { mapState } from 'vuex'
import favoritesService from '@/services/favoritesService'
export default {
  props: ['song'],
  data () {
    return {
      favorite: null
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const favorites = (await favoritesService.index({
          songId: this.song.id,
          userId: this.user.id
        })).data
        if (favorites.length) {
          this.favorite = favorites[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsFavorite () {
      try {
        this.favorite = (await favoritesService.post({
          songId: this.song.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unSetAsFavorite () {
      try {
        await favoritesService.delete(this.favorite.id)
        this.favorite = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.album-image {
  width: 65%;
  margin: 0 auto;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-album {
  font-size: 18px;
}
.tile {
  height: 405px;
}
</style>
