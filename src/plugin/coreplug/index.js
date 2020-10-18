import global from '@/utils/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import echarts from 'echarts'
import gojs from 'gojs'

// 组件
import '@/components'
// svg 图标
import '@/assets/svg-icons'
// 功能插件
import pluginError from '@/plugin/error'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'


export default {
  async install (Vue, options) {

    // 设置为 false 以阻止 vue 在启动时生成生产提示
    Vue.config.productionTip = false
   // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL
    // 当前版本
    Vue.prototype.$version = process.env.VUE_APP_VERSION
    
    // 构建时间
    Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
    Vue.prototype.$global = global // 挂载全局配置模块
    Vue.prototype.$echarts = echarts // 挂载echarts模块
    Vue.prototype.$gojs = gojs //挂载gojs模块

    // 插件
    Vue.use(ElementUI)  // 注册使用Element
    Vue.use(echarts) //注册使用echarts可视化插件
    Vue.use(gojs) //注册使用gojs可视化插件
    // Vue.use(api)
    Vue.use(pluginError)
    Vue.use(pluginLog)
    Vue.use(pluginOpen)
  }

}
