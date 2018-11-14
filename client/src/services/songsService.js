import api from '@/services/api'

export default {
  index () {
    return api().get('songs')
  },
  post (song) {
    return api().post('songs', song)
  },
  show (songID) {
    return api().get(`songs/${songID}`, songID)
  },
  put (song) {
    return api().put(`songs/${song.id}`, song)
  }
}
