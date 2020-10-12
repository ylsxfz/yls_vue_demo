import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

// 引入子模块
import app from './modules/app'
import tab from './modules/tab'
import user from './modules/user'
import menu from './modules/menu'
import iframe from './modules/iframe'
import system from './system'

const store = new vuex.Store({
    modules: {
        app: app,
        tab: tab,
        user: user,
        menu: menu,
        iframe: iframe,
        system:system,
    }
})

export default store
