import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import store from './store'
import api from './http'

// import preventDuplicateClick from './utils/prevent-duplicate-clicks'

// 引入核心插件
import coreplug from '@/plugin/coreplug'
// 注册核心插件
Vue.use(coreplug)
Vue.use(api)

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
