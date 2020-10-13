<template>
  <sys-container>
    <template slot="header">图标组件</template>
    <sys-icon style="background-color: #000000;"/>
    <p/>
    <sys-icon name="github"  style="background-color: #ffff7f;"/>
     <p/>
    <sys-icon name="github" style="font-size: 100px;background-color: #ffaa00;"/>
     <p/>
    <sys-icon name="github" style="background-color: #ff0000;"/>
  </sys-container>
</template>

<style lang="scss" scoped>
.icon-demo {
  transition: all .3s;
  font-size: 100px;
  color: #409EFF;
  // @extend %unable-select;
  &:hover{
    color: #F56C6C;
    transform: scale(1.2) rotate(30deg);
  }
}
</style>
