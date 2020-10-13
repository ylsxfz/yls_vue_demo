<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="'' + menu.id">
    <template slot="title">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <MenuTree class="xfz-menu-tree" v-for="item in menu.children" :key="item.id" :menu="item"></MenuTree>
  </el-submenu>
  <el-menu-item v-else :index="'' + menu.id" @click="handleRoute(menu)">
    <i :class="menu.icon"></i>
    <span slot="title">{{menu.title}}</span>
  </el-menu-item>
</template>

<script>
  import {
    getIFrameUrl,
    getIFramePath
  } from '@/utils/iframe'
  export default {
    name: 'MenuTree',
    props: {
      menu: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleRoute(menu) {
        // 如果是嵌套页面，转换成iframe的path
        let path = getIFramePath(menu.url)
        if (!path) {
          path = menu.url
        }
        // 通过菜单URL跳转至指定路由
        this.$router.push("/" + path)
      }
    }
  }
</script>

<style scoped lang="scss">
  .xfz-menu-tree {
    background-color: #2a3038;
  }

  //设置了默认左边框为白色
  .el-menu-item {
    //border-left: #fff solid 6px;
  }

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
    border-left: #FFFFFF solid 6px !important;
    background-color: rgb(70, 128, 231) !important;
    color: #FFFFFF !important;
  }
</style>
