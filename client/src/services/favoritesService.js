import api from '@/services/api'

export default {
  index (favorite) {
    return api().get('favorites', {
      params: favorite
    })
  },
  post (favorite) {
    return api().post('favorites', {
      params: favorite
    })
  },
  delete (favoriteId) {
    return api().delete(`favorites/${favoriteId}`)
  }
}
