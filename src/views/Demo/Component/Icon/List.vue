<template>
  <sys-container>
    <div>
      <el-radio-group v-model="showIndex" size="mini">
        <el-radio-button
          v-for="(item, index) in radioOptions"
          :key="index"
          :label="item.value">
          {{item.label}}
        </el-radio-button>
      </el-radio-group>
    </div>
    <el-row style="margin: 10px;">
      <el-alert title="点击图标复制代码" type="info" class="sys-m-10" style="width: auto;"/>
      <el-col v-for="(iconItem, iconIndex) in iconShow.icon" :key="iconIndex" :span="6" class="sys-p-10">
        <sys-icon-cell :icon="iconItem"/>
      </el-col>
    </el-row>
  </sys-container>
</template>

<script>
import icon from './data/index'
export default {
  components: {
    'sys-icon-cell': () => import('./components/sys-icon-cell')
  },
  data () {
    return {
      icon,
      showIndex: 12
    }
  },
  computed: {
    iconShow () {
      return this.icon[this.showIndex]
    },
    radioOptions () {
      return this.icon.map((e, index) => ({
        label: e.title,
        value: index
      }))
    }
  }
}
</script>
