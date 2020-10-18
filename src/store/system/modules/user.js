import util from '@/libs/util'
export default {
  namespaced: true,
  state: {
    // 用户信息
    info: {}
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} context
     * @param {*} info info
     */
    async set ({ state, dispatch }, info) {
      // store 赋值
      state.info = info
      // 持久化
      await dispatch('system/db/set', {
        dbName: 'sys',
        path: 'user.info',
        value: info,
        user: true
      }, { root: true })
      util.log.capsule('用户信息','登录时的用户信息设置','success')
      console.log(state.info)
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} context
     */
    async load ({ state, dispatch }) {
      // store 赋值
      state.info = await dispatch('system/db/get', {
        dbName: 'sys',
        path: 'user.info',
        defaultValue: {},
        user: true
      }, { root: true })
      util.log.capsule('用户信息','登录成功用户信息获取','success')
      console.log(state.info)
    }
  }
}
