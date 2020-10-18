<template>
  <div class="sys-layout-header-aside-group" :class="{grayMode: grayActive}">
    <!-- 导航菜单栏 -->
    <nav-bar></nav-bar>
    <!-- 头部区域 -->
    <head-bar></head-bar>
    <!-- 主内容区域 -->
    <main-content></main-content>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import HeadBar from "./HeadBar"
  import NavBar from "./NavBar"
  import MainContent from "./MainContent"
  export default {
    components: {
      HeadBar,
      NavBar,
      MainContent
    },
    computed: {
        ...mapState({
           grayActive: state => state.system.gray.active,
        })
    }
  };

</script>
<style lang="scss">
  @import '~@/assets/style/public-class.scss';
  // 注册主题
  @import '~@/assets/style/theme/register.scss';
</style>
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    // background: rgba(224, 234, 235, 0.1);
  }
</style>
