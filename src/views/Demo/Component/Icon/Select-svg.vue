<template>
  <sys-container>
    <template slot="header">svg 图标选择器</template>
    <div class="sys-mb">
      <p class="sys-mt-0 sys-mb-10">一般用法 | {{icon || '未选择'}}</p>
      <sys-icon-svg-select v-model="icon"/>
    </div>
    <div class="sys-mb">
      <p class="sys-mt-0 sys-mb-10">用户可以输入 | {{icon2 || '未选择'}}</p>
      <sys-icon-svg-select v-model="icon2" :user-input="true"/>
    </div>
  </sys-container>
</template>

<script>
export default {
  data () {
    return {
      icon: '',
      icon2: ''
    }
  }
}
</script>
