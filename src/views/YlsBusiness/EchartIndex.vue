<template>
  <div class="page-container" style="border: #42B983 0px solid; height:fit-content;">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple" id="myChart001"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple" id="myChart002"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple" id="myChart003"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple" id="myChart004"></div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple" id="myChart005"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart001 = this.$echarts.init(
          document.getElementById('myChart001')
        )
        this.$api.echart_map.topologicalGraph(myChart001)

        // 基于准备好的dom，初始化echarts实例
        let myChart002 = this.$echarts.init(
          document.getElementById('myChart002')
        )
        this.$api.echart_map.barGraphDynamic(myChart002)

        // 基于准备好的dom，初始化echarts实例
        let myChart003 = this.$echarts.init(
          document.getElementById('myChart003')
        )
        this.$api.echart_map.barGraphStatic(myChart003)

        // 基于准备好的dom，初始化echarts实例
        let myChart004 = this.$echarts.init(
          document.getElementById('myChart004')
        )
        this.$api.echart_map.barGraphCircle(myChart004)

        // 基于准备好的dom，初始化echarts实例
        let myChart005 = this.$echarts.init(
          document.getElementById('myChart005')
        )
        this.$api.echart_map.barGraphMore(myChart005)

      }
    },
    /**
     * mounted在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
     */
    mounted() {
      this.drawLine()
    },
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    padding: 0 0 ;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 0px;
  }

  .bg-purple {
    background: #d3dce6;
  }


  .grid-content {
    height: 21.875rem;
    border-radius: 0px;
    min-height: 36px;
  }
</style>
