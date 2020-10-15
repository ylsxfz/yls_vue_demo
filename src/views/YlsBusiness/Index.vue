<template>
  <div class="page-container index">
    <el-container style="height: 100%;">
      <el-header style="height: 3.5rem;">
        <span class="index-head">大屏监控主界面</span>
      </el-header>
      <el-main style="overflow: hidden;">
        <el-row class='index-el-row' :gutter="5">
          <!-- 左边 -->
          <el-col :span='7' class='index-left' style='height:100%;'>
            <el-row :gutter="0" type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content title-blue">&nbsp;&nbsp;图表</div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height:50%;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content left-map"></div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content title-blue">&nbsp;&nbsp;图表</div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height:40%;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content left-liucheng"></div>
              </el-col>
            </el-row>
          </el-col>

          <!-- 中间 -->
          <el-col :span='7' class='index-left' style='height:100%;'>
            <el-row :gutter="0" type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content title-blue">&nbsp;&nbsp;图表</div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height:50%;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content left-map"></div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content title-blue">&nbsp;&nbsp;图表</div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height:40%;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content left-liucheng"></div>
              </el-col>
            </el-row>
          </el-col>

          <!-- 右边 -->
          <el-col :span='10' class='index-right' style='height:100%;'>
            <el-row :gutter="5" type="flex" style='height:15%;' class="row-bg" justify="center">
              <el-col :span="6">
                <div class="grid-content right-top-one"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content right-top-two"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content right-top-three"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content right-top-four"></div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="12">
                <div class="grid-content title-blue">&nbsp;&nbsp;图表</div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content title-blue">&nbsp;&nbsp;图表</div>
              </el-col>
            </el-row>
            <el-row :gutter="5" type="flex" style='height:37%;' class="row-bg" justify="center">
              <el-col :span="12">
                <div class="grid-content right-center-left-one"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content right-center-right-one"></div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="12">
                <div class="grid-content title-blue">&nbsp;&nbsp;图表</div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content title-blue">&nbsp;&nbsp;图表</div>
              </el-col>
            </el-row>
            <el-row :gutter="5" type="flex" style='height:37%;' class="row-bg" justify="center">
              <el-col :span="12">
                <div class="grid-content right-center-left-one">

                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content right-center-right-one">

                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import IndexTable from "@/views/Core/IndexTable"
  export default {
    components: {
      IndexTable
    },
    data() {
      return {
        //分页请求
        pageRequest: {
          pageNum: 1,
          pageSize: 1
        },
      }
    },

    methods: {



    },

    mounted() {

    }
  }
</script>

<style scoped="scoped">
  .index {
    height: 100%;
    width: 100%;
    /* width: 120rem; */
    background-image: url(../../assets/images/indexBackground.png);
  }

  .index-head {
    color: #60b3fc;
    font-weight: 800;
    font-size: 1.5625rem;
    line-height: 3.5rem;
  }

  .el-header {
    background: url(../../assets/images/header.png);
  }

  .left-map {
    background: url(../../assets/images/liucheng-bg.png);
  }

  .left-liucheng {
    background: url(../../assets/images/liucheng-bg.png);
  }

  .right-top-one {
    background: url(../../assets/images/xianyiren-bg.png);
  }

  .right-top-two {
    background: url(../../assets/images/maijia-bg.png);
  }

  .right-top-three {
    background: url(../../assets/images/dianweidiancha-bg.png);
  }

  .right-top-four {
    background: url(../../assets/images/qiangke-bg.png);
  }

  .right-center-right-one {
    background: url(../../assets/images/xianyirendg-bg.png);
  }

  .right-center-left-one {
    background: url(../../assets/images/xianyirendg-bg.png);
  }

  .title-blue,
  .title-red {
    width: 12.5rem;
    font-weight: 500;
    text-align: left;
  }

  .title-blue {
    color: #60b3fc;
    background: url(../../assets/images/title-blue.png);
  }

  .title-red {
    color: #d04347;
    background: url(../../assets/images/title-red.png);
  }


  .el-header,
  .title-blue,
  .title-red,
  .left-map,
  .left-liucheng,
  .right-top-one,
  .right-top-two,
  .right-top-three,
  .right-top-four,
  .right-center-left-one,
  .right-center-right-one {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .index-el-row {
    height: 100%;
  }

  .el-row {
    padding: 0.3125rem;
    margin: 0rem;
  }

  .el-header,
  .grid-content {
    /* border: 2px solid red; */
  }

  .el-main {
    padding: 0rem;
    margin: 0rem;
  }

  .grid-content {
    /* background-color: rgb(44, 143, 121); */
    border-radius: 4px;
    /*    min-height: 20px;
    min-width: 20px; */
    height: 100%;
  }
</style>
