<template>
  <sys-container v-bind="$attrs">
    <iframe
      class="sys-container-frame"
      :src="src"
      frameborder="0"/>
  </sys-container>
</template>

<script>
export default {
  name: 'sys-container-frame',
  props: {
    src: {
      type: String,
      required: false,
      default: 'https://d2.pub/zh/doc/sys-admin'
    }
  }
}
</script>

<style lang="scss" scoped>
.sys-container-frame {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}
</style>
