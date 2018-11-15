import api from '@/services/api'

export default {
  index (search) {
    return api().get('songs', {
      params: {
        search: search
      }
    })
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
