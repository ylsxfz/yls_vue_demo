<template>
  <div class="headbar" :style="{'background':themeColor}" :class="collapse?'position-collapse-left':'position-left'">
    <!-- 导航收缩 -->
    <span class="hamburg">
      <el-menu class="el-menu-demo" :background-color="themeColor" text-color="#fff" :active-text-color="themeColor"
        mode="horizontal">
        <el-menu-item index="1" @click="onCollapse">
          <header-hamburger :isActive="collapse"></header-hamburger>
        </el-menu-item>
      </el-menu>
    </span>
    <!-- 导航菜单 -->
    <span class="navbar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" :background-color="themeColor" text-color="#fff"
        active-text-color="#ffd04b" mode="horizontal" @select="selectNavBar()">
        <el-menu-item index="1" @click="$router.push({
          path:'/system/info',
          name:'system-info',
          title:'系统介绍',
        })">{{$t("common.systemInfo")}}</el-menu-item>
        <!-- <el-menu-item index="2" @click="openWindow('https://gitee.com/liuge1988/kitty/wikis/Home')">{{$t("common.doc")}}</el-menu-item>
        <el-menu-item index="3" @click="openWindow('https://www.cnblogs.com/xifengxiaoma/')">{{$t("common.blog")}}</el-menu-item> -->
      </el-menu>
    </span>

    <!-- 工具栏 -->
    <span class="toolbar">
      <el-menu class="el-menu-demo" :background-color="themeColor" text-color="#14889A" :active-text-color="themeColor"
        mode="horizontal">
        <!-- 系统全屏按钮 -->
        <el-menu-item index="1">
          <header-fullscreen />
        </el-menu-item>
        <!-- 主题选择 -->
        <el-menu-item index="1">
          <header-theme />
        </el-menu-item>
        <!-- 全局大小 -->
        <el-menu-item index="1">
          <header-size />
        </el-menu-item>
        <!-- 日志管理 -->
        <el-menu-item index="1">
          <header-log />
        </el-menu-item>
        <!-- 搜索 -->
        <!-- <el-menu-item index="1">
          <header-search @click="handleSearchClick"/>
        </el-menu-item> -->
        <el-menu-item index="2" v-popover:popover-lang>
          <!-- 语言切换 -->
          <li style="color:#fff;" class="fa fa-language fa-lg"></li>
          <el-popover ref="popover-lang" placement="bottom-start" trigger="click" v-model="langVisible">
            <div class="lang-item" @click="changeLanguage('zh_cn')">简体中文</div>
            <div class="lang-item" @click="changeLanguage('en_us')">English</div>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="3" v-popover:popover-message>
          <!-- 我的私信 -->
          <el-badge :value="5" :max="99" class="badge">
            <li style="color:#fff;" class="fa fa-envelope-o fa-lg"></li>
          </el-badge>
          <el-popover ref="popover-message" placement="bottom-end" trigger="click">
            <header-message-panel></header-message-panel>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="4" v-popover:popover-notice>
          <!-- 系统通知 -->
          <el-badge :value="4" :max="99" class="badge">
            <li style="color:#fff;" class="fa fa-bell-o fa-lg"></li>
          </el-badge>
          <el-popover ref="popover-notice" placement="bottom-end" trigger="click">
            <header-notice-panel></header-notice-panel>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="5">
          <!-- 主题切换 -->
          <header-theme-picker class="theme-picker" :default="themeColor" @onThemeChange="onThemeChange">
          </header-theme-picker>
        </el-menu-item>
        <el-menu-item index="6" v-popover:popover-personal>
          <!-- 用户信息 -->
          <span class="user-info"><img :src="user.avatar" />{{user.nickName}}</span>
          <el-popover ref="popover-personal" placement="bottom-end" trigger="click" :visible-arrow="false">
            <header-personal-panel :user="user"></header-personal-panel>
          </el-popover>
        </el-menu-item>
      </el-menu>
    </span>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import mock from "@/mock/index"
  import HeaderHamburger from "@/layout/sys-head/header-hamburger"
  import HeaderThemePicker from "@/layout/sys-head/header-theme-picker"
  import HeaderNoticePanel from "@/layout/sys-head/header-notice-panel"
  import HeaderMessagePanel from "@/layout/sys-head/header-message-panel"
  import HeaderPersonalPanel from "@/layout/sys-head/header-personal-panel"
  import HeaderFullscreen from "@/layout/sys-head/header-fullscreen"
  import HeaderTheme from "@/layout/sys-head/header-theme"
  import HeaderLog from "@/layout/sys-head/header-log"
  import HeaderSearch from "@/layout/sys-head/header-search"
  import HeaderSize from "@/layout/sys-head/header-size"
  import mixinSearch from '@/layout/mixins/search'
  export default {
    components: {
      HeaderHamburger,
      HeaderThemePicker,
      HeaderNoticePanel,
      HeaderMessagePanel,
      HeaderPersonalPanel,
      HeaderFullscreen,
      HeaderTheme,
      HeaderLog,
      HeaderSearch,
      HeaderSize,
    },
    data() {
      return {
        user: {},
        activeIndex: '1',
        langVisible: false
      }
    },
    methods: {

      openWindow(url) {
        window.open(url)
      },

      selectNavBar(key, keyPath) {

      },

      /* 折叠导航栏 */
      onCollapse: function() {
        this.$store.commit('onCollapse')
      },

      /* 切换主题 */
      onThemeChange: function(themeColor) {
        this.$store.commit('setThemeColor', themeColor)
      },

      /* 语言切换 */
      changeLanguage(lang) {
        lang === '' ? 'zh_cn' : lang
        this.$i18n.locale = lang
        this.langVisible = false
      }
    },
    mounted() {
      var user = sessionStorage.getItem("user")
      if (user) {
        let params = {
          name: user
        }
        this.$api.user.findByName(params).then((res) => {
          if (res.code == 200) {
            this.user = res.data
            this.user.avatar = require("@/assets/user.png")
          }
        })
      }
    },
    computed: {
      ...mapState({
        themeColor: state => state.app.themeColor,
        collapse: state => state.app.collapse
      })
    }
  }
</script>

<style scoped lang="scss">
  .headbar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1030;
    height: 60px;
    line-height: 60px;
    border-color: rgba(180, 190, 190, 0.8);
    border-left-width: 1px;
    border-left-style: solid;
  }

  .hamburg {
    float: left;
  }

  .navbar {
    float: left;
  }

  .toolbar {
    float: right;
  }

  .lang-item {
    font-size: 16px;
    padding-left: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
  }

  .lang-item:hover {
    font-size: 18px;
    background: #b0d6ce4d;
  }

  .user-info {
    font-size: 20px;
    color: #fff;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      margin: 10px 0px 10px 10px;
      float: right;
    }
  }

  .badge {
    line-height: 18px;
  }

  .position-left {
    left: 200px;
  }

  .position-collapse-left {
    left: 65px;
  }
</style>

<style scoped lang="scss">
  //设置鼠标悬停时el-menu-item的样式
  .el-menu-item:hover {
    //border-left: #3F393B solid 6px !important;
    background-color: #EBB40E !important;
    color: #FFFFFF !important;

    //less语法，实现鼠标悬停时icon变色
    i {
      color: #FFFFFF;
    }
  }

  //设置选中el-menu-item时的样式
  .el-menu-item.is-active {
    //background-color: rgb(70, 128, 231) !important;
    //color: #FFFFFF !important;
  }
</style>
