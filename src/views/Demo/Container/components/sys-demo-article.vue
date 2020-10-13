<template>
  <div class="sys-demo-article">
    <div v-if="!long" class="sys-demo-article__control">
      <el-switch
        v-model="isLong"
        active-text="长内容"
        inactive-text="短内容"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 指定为长文本
    long: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      isLong: false
    }
  },
  created () {
    this.isLong = this.long
  }
}
</script>

<style lang="scss" scoped>
.sys-demo-article {
  transition: opacity .3s;
  .sys-demo-article__control {
    padding: 8px 16px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #f4f4f5;
  }
}
</style>
