import Api from '@/services/Api'

export default {
  index () {
    return Api().get('homes')
  },
  show (homeId) {
    return Api().get('home/'+homeId)
  },
  post (home) {
    return Api().post('home',home)
  },
  put (home) {
    return Api().put('home/'+blog.id, home)
  },
  delete (home) {
    return Api().delete('home/'+home.id, home)
  }
}