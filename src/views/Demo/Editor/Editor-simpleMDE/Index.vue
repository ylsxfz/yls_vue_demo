<template>
  <sys-container>
    <sys-mde
      v-model="text"
      class="mde"/>
    <el-card shadow="never" class="sys-card">
      <pre>{{text}}</pre>
    </el-card>
  </sys-container>
</template>

<script>
import text from './text'
export default {
  data () {
    return {
      text
    }
  }
}
</script>

<style lang="scss" scoped>
.mde {
  margin-bottom: -16px;
}
</style>
