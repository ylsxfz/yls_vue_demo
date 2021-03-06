// 设置文件
import setting from '@/setting.js'
import util from '@/libs/util'

export default {
  namespaced: true,
  state: {
    // 是否开启页面过度动画
    active: setting.transition.active
  },
  actions: {
    /**
     * @description 设置开启状态
     * @param {Object} context
     * @param {Boolean} active 新的状态
     */
    async set ({ state, dispatch }, active) {
      // store 赋值
      state.active = active
      // 持久化
      await dispatch('system/db/set', {
        dbName: 'sys',
        path: 'transition.active',
        value: state.active,
        user: true
      }, { root: true })
      util.log.capsule('页面动画','设置','success')
      console.log(state.active)
    },
    /**
     * 从数据库读取页面过渡动画设置
     * @param {Object} context
     */
    async load ({ state, dispatch }) {
      // store 赋值
      state.active = await dispatch('system/db/get', {
        dbName: 'sys',
        path: 'transition.active',
        defaultValue: setting.transition.active,
        user: true
      }, { root: true })
      util.log.capsule('页面动画','获取','success')
      console.log(state.active)
    }
  }
}
