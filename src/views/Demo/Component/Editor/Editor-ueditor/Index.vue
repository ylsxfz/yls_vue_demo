<template>
  <sys-container type="card">
    <el-row :gutter="20">
      <el-col :span="14">
        <sys-ueditor v-model="text"/>
      </el-col>
      <el-col :span="10">
        <el-card v-if="text" shadow="never" style="border: 1px solid #d4d4d4;">
          <template slot="header">Result</template>
          <div v-html="text" style="margin: -20px 0px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <template slot="footer">
      <el-button type="primary" @click="text += text">
        <sys-icon name="copy"/> 当前内容 x2
      </el-button>
      <el-button type="danger" @click="text = ''">
        <sys-icon name="trash-o"/> 清空
      </el-button>
    </template>
  </sys-container>
</template>

<script>
export default {
  data () {
    return {
      text: '<p>Hello World</p>'
    }
  }
}
</script>
