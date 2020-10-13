<template>
  <sys-container type="card">
    <div>当前状态 {{active ? '开启过渡动画' : '关闭过渡动画'}}</div>
    <el-button type="primary" @click="set(!active)">
      {{active ? '关闭页面过渡动画' : '打开页面过渡动画'}}
    </el-button>
  </sys-container>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapState('system/transition', [
        'active'
      ])
    },
    methods: {
      ...mapActions('system/transition', [
        'set'
      ])
    }
  }
</script>
