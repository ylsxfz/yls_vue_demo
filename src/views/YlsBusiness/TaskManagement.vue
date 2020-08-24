<template>
  <div class="page-container">
   <!-- 搜索框 -->
    <div class="toolbar" style="float: left;padding-top: 0.625rem;padding-left: 0.9375rem;">
      <el-form :inline="true" :model="filters" :size="size">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <kt-button icon="fa fa-search" :label="$t('action.search')" perms="sys:role:view" type="primary" @click="findByPage(null)"/>
        </el-form-item>
        <el-form-item>
          <kt-button icon="fa fa-plus" :label="$t('action.add')" perms="sys:task:add" type="primary" @click="handleAdd"/>
        </el-form-item>
      </el-form>
    </div>

    <!-- 工具栏 -->
    <div class="toolbar" style="float: right;padding-top: 0.625rem;padding-right: 0.9375rem;">
      <el-form>
        <el-form-item>
          <el-button-group>
            <el-tooltip content="刷新" placement="top">
              <el-button icon="fa fa-refresh" @click="findByPage(null)"></el-button>
            </el-tooltip>
            <el-tooltip content="列显示" placement="top">
              <el-button icon="fa fa-filter" @click="displayFilterColumnsDialog"></el-button>
            </el-tooltip>
            <el-tooltip content="导出" placement="top">
              <el-button icon="fa fa-file-excel-o" @click="exportUserExcelFile"></el-button>
            </el-tooltip>
          </el-button-group>
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>

<script>
  //导入模块
  import KtButton from "@/views/Core/KtButton.vue"
  export default{
    /**
     * 注册组件
     */
    components: {
      KtButton
    },

    /**
     * data() 为变量赋值等
     */
    data(){
      return{
        size: 'small',
        filters: {
          name: ''
        },

      }
    },

    /**
     * 定义方法
     */
    methods: {
      //分页查询数据
      findByPage: function(data){
        return {}
      },

      //显示新增页面
      handleAdd: function(){
        return {}
      },

      //列显示
      displayFilterColumnsDialog: function(){
        this.$refs.TableColumnFilterDialog.setDialogVisible(true)
      },

      //导出Excel用户信息
      exportUserExcelFile: function(){
        return {}
      }

    },

    /**
     * mounted在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
     */
    mounted() {

    }

  }
</script>

<style scoped>
</style>
