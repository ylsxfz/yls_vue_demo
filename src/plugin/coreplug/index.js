// 组件
import '@/components'

// 功能插件
import pluginApi from '@/plugin/api'
import pluginError from '@/plugin/error'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'

export default {
  async install (Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // 插件
    Vue.use(pluginApi)
    Vue.use(pluginError)
    Vue.use(pluginLog)
    Vue.use(pluginOpen)
  }

}
