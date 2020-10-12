<template>
  <el-tooltip effect="dark" :content="active ? '退出全屏' : '全屏'" placement="bottom">
    <li @click="toggle">
      <sys-icon v-if="active" name="compress" />
      <sys-icon v-else name="arrows-alt" style="font-size: 16px" />
    </li>
  </el-tooltip>
</template>
<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapState('system/fullscreen', [
        'active'
      ])
    },
    methods: {
      ...mapActions('system/fullscreen', [
        'toggle'
      ])
    }
  }
</script>
