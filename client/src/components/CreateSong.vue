<template>
<v-container fluid grid-list-md>
  <v-layout row wrap >
    <v-flex d-flex xs12 sm6 md4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>
        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>
        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>
        <v-text-field
          label="Album Image URL"
          v-model="song.albumImageURL"
        ></v-text-field>
        <v-text-field
          label="Youtube ID"
          v-model="song.youtubeID"
        ></v-text-field>
        <v-text-field
          label="Spotify ID"
          v-model="song.spotifyID"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex d-flex xs12 sm6 md8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics"
        ></v-text-field>
        <v-text-field
          label="Tab"
          multi-line
          v-model="song.tab"
        ></v-text-field>
        <span class="validation-error" v-if="error">
          {{error}}
        </span><br>
        <v-btn dark class="indigo darken-2"
              @click="create">
              Create Song
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import SongsService from '@/services/songsService'
export default {
  data () {
    return {
      required: (value) => !!value || 'Required.',
      error: null,
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeID: null,
        spotifyID: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      this.error = null
      const areRequiredFilled = !(this.song.title == null || this.song.artist == null || this.song.genre == null || this.song.album == null)
      if (!areRequiredFilled) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        // TODO: GoTo SongView
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
