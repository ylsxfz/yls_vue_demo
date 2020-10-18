import Vue from 'vue'
import VueRouter from 'vue-router'
import api from '@/http/api'
import store from '@/store'
// import Cookies from "js-cookie"
import util from '@/libs/util.js'
import {
  getIFramePath,
  getIFrameUrl
} from '@/utils/iframe'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

Vue.use(VueRouter)
/**
 * 重写路由的push方法
 */
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return VueRouterPush.call(this, location).catch(error => error)
}

const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return VueRouterReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [{
      path: '/',
      title: '首页',
      name: 'index',
      meta: {
        title: '首页',
        icon: 'fa fa-home fa-lg',
        auth: true
      },
      component: _import('Home'),
      children: [{
          path: '/system/info',
          title: '系统介绍',
          name: 'system-info',
          component: _import('Intro/Intro'),
          meta: {
            icon: 'fa fa-home fa-lg',
            title: '系统介绍',
            index: 0
          }
        }, // 系统 前端日志
        {
          path: '/system/log',
          name: 'system-log',
          meta: {
            title: '前端日志',
            // auth: true,
            index: 1
          },
          component: _import('System/log')
        },
      ]
    },
    {
      path: '/login',
      title: '登录',
      name: 'login',
      component: _import('Login')
    },
    {
      path: '/404',
      name: 'not-found',
      title: 'notFound',
      component: _import('404')
    },

    // 刷新页面 必须保留
    {
      path: '/refresh',
      name: 'refresh',
      hidden: true,
      component: _import('System/function/refresh')
    },
    // 页面重定向 必须保留
    {
      path: 'redirect/:route*',
      name: 'redirect',
      hidden: true,
      component: _import('System/function/redirect')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 缓存
  store.dispatch('system/page/isLoaded')
  // 尺寸
  store.dispatch('system/size/isLoaded')
  // 进度条
  NProgress.start()
  // 关闭搜索面板
  store.commit('system/search/set', false)
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let userName = sessionStorage.getItem('user')
  // let userName = util.cookies.get('username')
  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if (userName) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    if (!userName) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({
        path: '/login'
      })
    } else {
      // 加载动态菜单和路由
      addDynamicMenuAndRoutes(userName, to, from)
      next()
    }
  }
})

router.afterEach(to => {
  // 进度条
  NProgress.done()
  // 多页控制 打开新的页面
  store.dispatch('system/page/open', to)
})

/**
 * 加载动态菜单和路由
 */
function addDynamicMenuAndRoutes(userName, to, from) {
  // 处理IFrame嵌套页面
  handleIFrameUrl(to.path)
  if (store.state.app.menuRouteLoaded) {
    util.log.capsule('动态路由','已经存在','success')
    return
  }
  api.menu.findNavTree({
      'userName': userName
    })
    .then(res => {
      // 添加动态路由
      let dynamicRoutes = addDynamicRoutes(res.data)
      // 处理静态组件绑定路由
      router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
      router.addRoutes(router.options.routes)
      // 保存加载状态
      store.commit('menuRouteLoaded', true)
      // 保存菜单树
      store.commit('setNavTree', res.data)
    }).then(res => {
      api.user.findPermissions({
        'name': userName
      }).then(res => {
        // 保存用户权限标识集合
        store.commit('setPerms', res.data)
      })
    })
    .catch(function(res) {})
}

/**
 * 处理IFrame嵌套页面
 */
function handleIFrameUrl(path) {
  // 嵌套页面，保存iframeUrl到store，供IFrame组件读取展示
  let url = path
  let length = store.state.iframe.iframeUrls.length
  for (let i = 0; i < length; i++) {
    let iframe = store.state.iframe.iframeUrls[i]
    if (path != null && path.endsWith(iframe.path)) {
      url = iframe.url
      store.commit('setIFrameUrl', url)
      break
    }
  }
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function addDynamicRoutes(menuList = [], routes = []) {
  var temp = []
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, '')
      // 创建路由配置
      var route = {
        path: menuList[i].url,
        component: null,
        name: menuList[i].name,
        meta: {
          title: menuList[i].title,
          icon: menuList[i].icon,
          index: menuList[i].id,
          cache: menuList[i].cache
        }
      }
      let path = getIFramePath(menuList[i].url)
      if (path) {
        // 如果是嵌套页面, 通过iframe展示
        route['path'] = path
        route['component'] = resolve => require([`@/views/IFrame/IFrame`], resolve)
        // 存储嵌套页面路由路径和访问URL
        let url = getIFrameUrl(menuList[i].url)
        let iFrameUrl = {
          'path': path,
          'url': url
        }
        store.commit('addIFrameUrl', iFrameUrl)
      } else {
        try {
          // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
          // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
          let array = menuList[i].url.split('/')
          let url = ''
          for (let i = 0; i < array.length; i++) {
            url += array[i].substring(0, 1).toUpperCase() + array[i].substring(1) + '/'
          }
          url = url.substring(0, url.length - 1)
          route['component'] = resolve => require([`@/views/${url}`], resolve)
        } catch (e) {}
      }
      routes.push(route)
    }
  }
  if (temp.length >= 1) {
    addDynamicRoutes(temp, routes)
  } else {
    util.log.capsule('动态路由','加载完成','success')
    console.log(routes)
  }
  return routes
}

export default router
