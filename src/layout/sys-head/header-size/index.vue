<template>
  <el-dropdown placement="bottom" size="small" @command="handleChange">
    <li>
      <sys-icon name="font" style="font-size: 16px;"/>
    </li>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in options" :key="item.value" :command="item.value">
        <sys-icon :name="iconName(item.value)" style="color: #000000;" class="sys-mr-5"/>{{item.label}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'header-size',
  data () {
    return {
      options: [
        { label: '默认', value: 'default' },
        { label: '中', value: 'medium' },
        { label: '小', value: 'small' },
        { label: '最小', value: 'mini' }
      ]
    }
  },
  computed: {
    ...mapState('system/size', [
      'value'
    ])
  },
  methods: {
    ...mapMutations({
      pageKeepAliveClean: 'system/page/keepAliveClean'
    }),
    ...mapActions({
      sizeSet: 'system/size/set'
    }),
    handleChange (value) {
      this.sizeSet(value)
      this.$notify({
        title: '提示',
        dangerouslyUseHTMLString: true,
        message: '已更新页面内 <b>组件</b> 的 <b>默认尺寸</b><br/>例如按钮大小，<b>非字号</b>',
        type: 'success'
      })
    },
    iconName (name) {
      return name === this.value ? 'dot-circle-o' : 'circle-o'
    }
  }
}
</script>
