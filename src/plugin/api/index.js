import api from '@/http'

export default {
  install (Vue) {
    Vue.prototype.$api = api
  }
}
