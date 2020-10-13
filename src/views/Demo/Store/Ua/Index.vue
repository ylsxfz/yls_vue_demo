<template>
  <sys-container>
    <p class="sys-mt-0">useragent</p>
    <el-input :value="uaData.ua"></el-input>
    <p>格式化数据 in vuex: state.system.ua.data</p>
    <sys-highlight :code="uaStr"/>
  </sys-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('system/ua', {
      uaData: 'data'
    }),
    uaStr () {
      const { browser, engine, os, device, cpu } = this.uaData
      return JSON.stringify({ browser, engine, os, device, cpu }, null, 2)
    }
  }
}
</script>
