<template>
  <div class="page-container">
    <!-- 数据源管理页面 -->
    <!-- 搜索框 -->
    <div class="toolbar" style="float: left;padding-top: 0.625rem;padding-left: 0.9375rem;">
      <el-form :inline="true" :model="filters" :size="size">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="连接名称"></el-input>
        </el-form-item>
        <el-form-item>
          <kt-button icon="fa fa-search" :label="$t('action.search')" perms="sys:role:view" type="primary" @click="findByPage(null)" />
        </el-form-item>
        <el-form-item>
          <kt-button icon="fa fa-plus" :label="$t('action.add')" perms="sys:task:add" type="primary" @click="handleAdd" />
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
      <!--表格显示列界面-->
      <table-column-filter-dialog ref="tableColumnFilterDialog" :columns="columns" @handleFilterColumns="handleFilterColumns">
      </table-column-filter-dialog>
    </div>


    <!--表格内容栏-->
    <kt-table permsEdit="sys:user:edit" permsDelete="sys:user:delete" :data="pageResult" :columns="filterColumns"
      @findPage="findByPage" @handleEdit="handleEdit" @handleDelete="handleDelete">
    </kt-table>


  </div>
</template>

<script>
  //导入模块
  import PopupTreeInput from "@/components/PopupTreeInput"
  import KtTable from "@/views/Core/KtTable"
  import KtButton from "@/views/Core/KtButton"
  import TableColumnFilterDialog from "@/views/Core/TableColumnFilterDialog"
  import {
    format
  } from "@/utils/datetime"
  //向外暴露的成员，可以使用任意变量来接收
  export default {
    /**
     * 注册组件
     */
    components: {
      PopupTreeInput,
      KtTable,
      KtButton,
      TableColumnFilterDialog
    },
    /**
     * 名称
     */
    name: 'empty_page',

    /**
     * 注册属性
     */
    props: {

    },

    /**
     *  data() 为变量赋值等
     */
    data() {
      return {
        size: 'small',
        filters: {
          name: ''
        },
        columns: [],
        filterColumns: [],
        pageRequest: {
          pageNum: 1,
          pageSize: 1
        },
        pageResult: {

        },

      }
    },

    /**
     * 注册方法函数
     */
    methods: {
      //分页查询数据
      findByPage: function(data) {
        if (data !== null) {
          this.pageRequest = data.pageRequest
        }
        this.pageRequest.params = [{
          name: 'name',
          value: this.filters.name
        }]
        this.$api.datasource_manage.findPage(this.pageRequest).then((res) => {
          this.pageResult = res.data
        }).then(data != null ? data.callback : '')
      },

      //显示新增页面
      handleAdd: function() {
        return {}
      },

      //删除
      handleDelete: function() {
        return {}
      },

      handleEdit: function() {
        return {}
      },

      //列显示
      displayFilterColumnsDialog: function() {
        this.$refs.tableColumnFilterDialog.setDialogVisible(true)
      },

      // 处理表格列过滤显示
      handleFilterColumns: function(data) {
        this.filterColumns = data.filterColumns
        this.$refs.tableColumnFilterDialog.setDialogVisible(false)
      },

      //导出Excel用户信息
      exportUserExcelFile: function() {
        return {}
      },

      // 处理表格列过滤显示
      initColumns: function() {
        this.columns = [{
            prop: "id",
            label: "ID",
            minWidth: 50
          },
          {
            prop: "name",
            label: "连接名称",
            minWidth: 120
          },
          {
            prop: "ip",
            label: "地址",
            minWidth: 120
          },
          {
            prop: "status",
            label: "状态",
            minWidth: 120
          },
          {
            prop: "heartbeatTime",
            label: "最近心跳时间",
            minWidth: 100
          },
          {
            prop: "createTime",
            label: "创建时间",
            minWidth: 120,
            // formatter: this.dateFormat
          },
          {
            prop: "createUser",
            label: "创建人",
            minWidth: 120,
          },
          {
            prop: "lastUpdateUser",
            label: "更新人",
            minWidth: 100
          },
          {
            prop: "lastUpdateTime",
            label: "更新时间",
            minWidth: 120,
            // formatter: this.dateFormat
          }
        ]
        this.filterColumns = JSON.parse(JSON.stringify(this.columns));
      }

    },


    /**
     * created 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
     */
    created() {

    },

    /**
     * mounted在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
     */
    mounted() {
      this.initColumns();
    },
  }
</script>

<style scoped>

</style>
