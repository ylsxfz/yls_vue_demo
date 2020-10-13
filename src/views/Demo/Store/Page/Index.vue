<template>
  <sys-container type="card">
    <!-- 证明有缓存 -->
    <p class="sys-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <el-input v-model="value" placeholder="input here"></el-input>
    <!-- 页签操作 -->
    <p>关闭标签页</p>
    <el-button-group>
      <el-button @click="handleCloseCurrent">
        <sys-icon name="times"/> 当前
      </el-button>
      <el-button @click="handleCloseLeft">
        <sys-icon name="arrow-left"/> 左侧
      </el-button>
      <el-button @click="handleCloseRight">
        右侧 <sys-icon name="arrow-right"/>
      </el-button>
      <el-button @click="handleCloseOther">
        其它 <sys-icon name="times"/>
      </el-button>
      <el-button @click="closeAll">
        全部 <sys-icon name="times-circle"/>
      </el-button>
    </el-button-group>
    <p>刷新</p>
    <el-button-group>
      <el-button @click="handleCleanCacheAndRefreshCurrent">
        <sys-icon name="refresh"/>
        清空当前页缓存并刷新
      </el-button>
      <el-button @click="handleCleanCacheAndRefreshAll">
        <sys-icon name="refresh"/>
        清空所有缓存并刷新
      </el-button>
    </el-button-group>
  </sys-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'demo-playground-store-page',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    ...mapMutations('system/page', [
      'keepAliveRemove',
      'keepAliveClean'
    ]),
    ...mapActions('system/page', [
      'close',
      'closeLeft',
      'closeRight',
      'closeOther',
      'closeAll'
    ]),
    // 关闭当前
    handleCloseCurrent () {
      this.close({
        tagName: this.$route.fullPath
      })
    },
    // 关闭左侧
    handleCloseLeft () {
      this.closeLeft({
        tagName: this.$route.fullPath
      })
    },
    // 关闭右侧
    handleCloseRight () {
      this.closeRight({
        tagName: this.$route.fullPath
      })
    },
    // 关闭其他
    handleCloseOther () {
      this.closeOther({
        tagName: this.$route.fullPath
      })
    },
    // 清空当前页缓存并刷新此页面
    async handleCleanCacheAndRefreshCurrent () {
      this.keepAliveRemove(this.$route.name)
      await this.$nextTick()
      this.$router.replace('/refresh')
    },
    // 清空所有的缓存并刷新此页面
    async handleCleanCacheAndRefreshAll () {
      this.keepAliveClean()
      await this.$nextTick()
      this.$router.replace('/refresh')
    }
  }
}
</script>
