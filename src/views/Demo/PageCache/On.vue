<template>
  <sys-container type="card">
    <div>这个页面会被 keep-alive</div>
    <p class="sys-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <el-input v-model="value" placeholder="input here"></el-input>
  </sys-container>
</template>

<script>
export default {
  name: 'demo-pageCache-on',
  data () {
    return {
      value: ''
    }
  }
}
</script>
