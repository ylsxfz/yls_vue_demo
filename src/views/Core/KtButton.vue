<template>
  <el-button :size="size" :type="type" :icon="icon" :loading="loading" :disabled="!hasPerms(perms)" :last="0" @click="handleClick">
    {{label}}
  </el-button>
</template>

<script>
  import {
    hasPermission
  } from '@/permission/index.js'
  export default {
    name: 'KtButton',
    props: {
      label: { // 按钮显示文本
        type: String,
        default: 'Button'
      },
      icon: { // 按钮显示图标
        type: String,
        default: ''
      },
      size: { // 按钮尺寸
        type: String,
        default: 'mini'
      },
      type: { // 按钮类型
        type: String,
        default: null
      },
      loading: { // 按钮加载标识
        type: Boolean,
        default: false
      },
      disabled: { // 按钮是否禁用
        type: Boolean,
        default: false
      },
      perms: { // 按钮权限标识，外部使用者传入
        type: String,
        default: null
      }
    },
    data() {
      return {
        lastClickTime: 0,
        clickTime: 3000,
      }
    },
    methods: {
      handleClick: function() {
        this.clickTime = new Date().valueOf()
        // 按钮操作处理函数
        // this.$emit('click', {})
      },
      hasPerms: function(perms) {
        // 根据权限标识和外部指示状态进行权限判断
        //return hasPermission(perms) & !this.disabled
        return true;
      }
    },

    /* 侦听器 */
    watch: {
      /**
       * 侦听按钮点击频率
       * @param {Object} val
       */
      clickTime: function(val) {
        if ((val - this.lastClickTime) > 1000) {
          //重置上一次点击时间，2000是我自己设置的2秒间隔，根据自己的需要更改
          this.lastClickTime = this.clickTime
          this.$emit('click', {})
        } else {
          this.$message({
            duration: 1000,
            message: '你的操作过于频繁',
            type: 'error'
          })
        }
      }
    },

    mounted() {}
  }
</script>

<style scoped>

</style>
