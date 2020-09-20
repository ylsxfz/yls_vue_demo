<template>
  <div class="page-container index">
    <el-container style="height: 100%;">
      <el-header style="height: 3.5rem;">
        <span class="index-head">大屏监控主界面</span>
      </el-header>
      <el-main style="overflow: hidden;">
        <el-row class='index-el-row' gutter=5>
          <!-- 左边 -->
          <el-col :span='10' class='index-left' style='height:100%;'>
            <el-row :gutter=0 type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content title-blue">&nbsp;&nbsp;热力图</div>
              </el-col>
            </el-row>
            <el-row :gutter=0 type="flex" style='height:50%;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content left-map"></div>
              </el-col>
            </el-row>
            <el-row :gutter=0 type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content title-blue">&nbsp;&nbsp;流程图</div>
              </el-col>
            </el-row>
            <el-row :gutter=0 type="flex" style='height:40%;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content left-liucheng"></div>
              </el-col>
            </el-row>
          </el-col>

          <!-- 右边 -->
          <el-col :span='14' class='index-right' style='height:100%;'>
            <el-row :gutter=5 type="flex" style='height:15%;' class="row-bg" justify="center">
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
            <el-row :gutter=0 type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="12">
                <div class="grid-content title-blue">&nbsp;&nbsp;数据统计图</div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content title-blue">&nbsp;&nbsp;数据统计图</div>
              </el-col>
            </el-row>
            <el-row :gutter=5 type="flex" style='height:25%;' class="row-bg" justify="center">
              <el-col :span="12">
                <div class="grid-content right-center-left-one"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content right-center-right-one"></div>
              </el-col>
            </el-row>
            <el-row :gutter=0 type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content title-red">&nbsp;&nbsp;突出显示列表</div>
              </el-col>
            </el-row>
            <el-row :gutter="0" type="flex" style='height:25%;' class="row-bg" justify="center">
              <el-col :span="24">
                <div class="grid-content index-data-list">
                  <!--表格内容栏-->
                  <index-table permsEdit="sys:user:edit" permsDelete="sys:user:delete"
                   :data="pageResult001" :columns="columns001"  @findPage="listHighRiskCues">

                  </index-table>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter=0 type="flex" style='height: 2.1875rem;' class="row-bg" justify="center">
              <el-col :span="12">
                <div class="grid-content title-blue">&nbsp;&nbsp;数据列表展示</div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content title-blue">&nbsp;&nbsp;数据列表展示</div>
              </el-col>
            </el-row>
            <el-row :gutter=5 type="flex" style='height:25%;' class="row-bg" justify="center">
              <el-col :span="12">
                <div class="grid-content index-data-list">
                  <!--表格内容栏-->
                 <index-table :data="pageResult002" :columns="columns002" @findPage="listJDSellers">

                  </index-table>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content index-data-list">
                  <!--表格内容栏-->
                  <index-table :data="pageResult003" :columns="columns003" @findPage="listCriminalRecords">

                  </index-table>
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
        columns001: [],
        pageResult001: {},
        columns002: [],
        pageResult002: {},
        columns003: [],
        pageResult003: {},
      }
    },

    methods: {
      // 处理表格列过滤显示
      initColumns: function() {
        this.columnShow001 = [{
            prop: "id",
            label: "测试列001",
            minWidth: 130
          },
          {
            prop: "name",
            label: "测试列001",
            minWidth: 156
          },
          {
            prop: "nickname",
            label: "测试列001",
            minWidth: 150
          },{
            prop: "id",
            label: "测试列001",
            minWidth: 130
          },
          {
            prop: "name",
            label: "测试列001",
            minWidth: 150
          },
          {
            prop: "nickname",
            label: "测试列001",
            minWidth: 160
          }
        ]
        this.columns001 = JSON.parse(JSON.stringify(this.columnShow001));

        this.columnShow002 = [{
            prop: "id",
            label: "测试列002",
            minWidth: 130
          },
          {
            prop: "name",
            label: "测试列002",
            minWidth: 140
          },
          {
            prop: "nickname",
            label: "测试列002",
            minWidth: 160
          }
        ]
        this.columns002 = JSON.parse(JSON.stringify(this.columnShow002));


        this.columnShow003 = [{
            prop: "id",
            label: "测试列003",
            minWidth: 130
          },
          {
            prop: "name",
            label: "测试列003",
            minWidth: 140
          },
          {
            prop: "nickname",
            label: "测试列003",
            minWidth: 160
          }
        ]
        this.columns003 = JSON.parse(JSON.stringify(this.columnShow003));
      },

      //加载表格数据
      listHighRiskCues:function(data){
        if (data !== null) {
          this.pageRequest = data.pageRequest
        }
        this.$api.jl_index.listHighRiskCues(this.pageRequest).then((res)=>{
          this.pageResult001 = res.data
        }).then(data != null ? data.callback : '')
      },



      listJDSellers:function(data){
        if (data !== null) {
          this.pageRequest = data.pageRequest
        }
        this.$api.jl_index.listJDSellers(this.pageRequest).then((res)=>{
          this.pageResult002 = res.data
        }).then(data != null ? data.callback : '')
      },

      listCriminalRecords:function(data){
        if (data !== null) {
          this.pageRequest = data.pageRequest
        }
        this.$api.jl_index.listCriminalRecords(this.pageRequest).then((res)=>{
          this.pageResult003 = res.data
        }).then(data != null ? data.callback : '')
      },



    },

    mounted() {
      this.initColumns()
    }
  }
</script>

<style>
  .index {
    height: 100%;
    width: 100%;
    /* width: 120rem; */
    background-image: url(../../assets/images/indexBackground.png);
  }

  .index-head{
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
