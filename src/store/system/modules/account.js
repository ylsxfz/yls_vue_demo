import {
  Message,
  MessageBox
} from 'element-ui'
import util from '@/libs/util.js'
import router from '@/router'
import api from '@/http'

import {
  login,
  logout
} from "@/http/modules/system/login"

export default {
  namespaced: true,
  actions: {
    /**
     * @description 登录
     * @param {Object}  username {String} 用户账号
     * @param {Object}  password {String} 密码
     * @param {Object}  route {Object} 登录成功后定向的路由对象 任何 vue-router 支持的格式
     */
    async login({
      dispatch
    }, {
      username = '',
      password = ''
    } = {}) {
      let userInfo = {
        account: username,
        password: password,
        captcha: "1234"
      }
      const res = await login(userInfo)
      // 设置 cookie 一定要存 uuid 和 token 两个 cookie
      // 整个系统依赖这两个数据进行校验和存储
      // uuid 是用户身份唯一标识 用户注册的时候确定 并且不可改变 不可重复
      // token 代表用户当前登录状态 建议在网络请求中携带 token
      // 如有必要 token 需要定时更新，默认保存一天
      util.cookies.set('uuid', res.data.uuid)
      util.cookies.set('username', res.data.name)
      util.cookies.set('token', res.data.token)
      sessionStorage.setItem('user', username) // 保存用户到本地会话
      // 设置 vuex 用户信息
      await dispatch('system/user/set', {
        name: res.name
      }, {
        root: true
      })
      // 用户登录后从持久化数据加载一系列的设置
      await dispatch('load')
      return res
    },

    /**
     * @description 注销用户并返回登录页面
     * @param {Object} confirm {Boolean} 是否需要确认
     */
    logout({
      commit,
      dispatch
    }, {
      confirm = true
    } = {}) {
      /**
       * @description 注销
       */
      async function logoutCleanMsg() {
        // 删除cookie
        util.cookies.remove('token')
        util.cookies.remove('uuid')
        util.cookies.remove('username')
        sessionStorage.removeItem("user")
        const res = await logout();
        // 清空 vuex 用户信息
        await dispatch('system/user/set', {}, {
          root: true
        })
        // 跳转路由
        router.push({
          name: 'login'
        })
      }

      // 判断是否需要确认
      if (confirm) {
        commit('system/gray/set', true, {
          root: true
        })
        MessageBox.confirm('确定要注销当前用户吗', '注销用户', {
            type: 'warning'
          })
          .then(() => {
            commit('system/gray/set', false, {
              root: true
            })
            logoutCleanMsg()
          })
          .catch(() => {
            commit('system/gray/set', false, {
              root: true
            })
            Message({
              message: '取消注销操作'
            })
          })
      } else {
        logoutCleanMsg()
      }
    },

    /**
     * @description 用户登录后从持久化数据加载一系列的设置
     * @param {Object} context
     */
    async load({
      dispatch
    }) {
      // 加载用户名
      await dispatch('system/user/load', null, {
        root: true
      })
      // 加载主题
      await dispatch('system/theme/load', null, {
        root: true
      })
      // 加载页面过渡效果设置
      await dispatch('system/transition/load', null, {
        root: true
      })
      // 持久化数据加载全局尺寸
      await dispatch('system/size/load', null, {
        root: true
      })
      
      
      // 持久化数据加载上次退出时的多页列表
      await dispatch('system/page/openedLoad', null, {
        root: true
      })
      // 持久化数据加载侧边栏配置
      await dispatch('system/menu/asideLoad', null, {
        root: true
      })

      // // 持久化数据加载颜色设置
      // await dispatch('system/color/load', null, {
      //   root: true
      // })
    }
  }
}
