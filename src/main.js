import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http'
import i18n from './i18n'
import store from './store'
import global from '@/utils/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import echarts from 'echarts'
import gojs from 'gojs'

Vue.use(ElementUI)  // 注册使用Element
Vue.use(api)  // 注册使用API模块
Vue.use(echarts) //注册使用echarts可视化插件
Vue.use(gojs) //注册使用gojs可视化插件

Vue.prototype.global = global // 挂载全局配置模块
Vue.prototype.$echarts = echarts // 挂载echarts模块
Vue.prototype.$gojs = gojs //挂载gojs模块

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
