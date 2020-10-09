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

    <!-- 新增编辑界面 -->
    <el-dialog :title="operation?'新增':'编辑'" width="40%" :visible.sync="dialogVisible" :close-on-click-modal="false">
      <el-form :model="dataForm" label-width="80px" :rules="dataFormRules" ref="dataForm" :size="size" label-position="right">
        <el-form-item label="ID" prop="id" v-if="false">
          <el-input v-model="dataForm.id" :disabled="true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="连接名称" prop="name">
          <el-input v-model="dataForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="主机" prop="ip">
          <el-input v-model="dataForm.ip" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="dataForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="dataForm.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <!-- 按钮区域 -->
      <div slot="footer" class="dialog-footer">
        <el-button :size="size" @click.native="dialogVisible = false">{{$t('action.cancel')}}</el-button>
        <el-button :size="size" type="primary" @click.native="submitForm" :loading="editLoading">{{$t('action.submit')}}</el-button>
      </div>
    </el-dialog>
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

  import {
    submitCom
  }from "@/utils/requestUtils"

  import {
    getFormResponse
  }from "@/utils/responseUtils"

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
        //过滤字段
        filters: {
          name: ''
        },
        //列显示相关
        columns: [],
        filterColumns: [],
        //分页请求
        pageRequest: {
          pageNum: 1,
          pageSize: 1
        },
        //分页结果
        pageResult: {

        },
        dataFormRules: {
          name: [{
            required: true,
            message: '请输入连接名称',
            trigger: 'blur'
          }]
        },
        //新增编辑相关
        operation: false, // true:新增, false:编辑
        dialogVisible: false, // 新增编辑界面是否显示
        editLoading: false,
        // 新增编辑界面数据
        dataForm: {
          id: 0,
          name: '',
          ip: '192.168.0.1',
          username: 'yls',
          password: '123456'
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
        //封装请求参数
        this.pageRequest.params = [{
          name: 'name',
          value: this.filters.name
        }]
        this.$api.datasource_manage.findPage(this.pageRequest).then((res) => {
          this.pageResult = res.data
        }).then(data != null ? data.callback : '')
      },

      //表单提交
      submitForm: function() {
        //调用统一封装的请求
        submitCom(this,() => {
          this.editLoading = true
          //封装请求参数
          let params = Object.assign({}, this.dataForm)
          console.log(params)
          //提交请求
          this.$api.datasource_manage.save(params).then((res) => {
            //调用统一封装的响应解析
            getFormResponse(this, res)
          })
        })
      },


      //显示新增页面
      handleAdd: function() {
        this.dialogVisible = true
        this.operation = true
        this.dataForm = {
          id: 0,
          name: 'hive',
          ip: '192.168.0.1',
          username: 'yls',
          password: '123456',
        }
      },

      //删除
      handleDelete: function(data) {
        this.$api.datasource_manage.batchDelete(data.params).then(data != null ? data.callback : '')
      },

      //显示编辑
      handleEdit: function(params) {
        this.dialogVisible = true
        this.operation = false
        this.dataForm = Object.assign({}, params.row)
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
            minWidth: 80
          },
          {
            prop: "ip",
            label: "主机",
            minWidth: 80
          },
          {
            prop: "username",
            label: "用户名",
            minWidth: 80,
          },
          {
            prop: "password",
            label: "密码",
            minWidth: 80,
          },
          {
            prop: "connType",
            label: "连接类型",
            minWidth: 80
          },
          {
            prop: "status",
            label: "状态",
            minWidth: 60
          },
          {
            prop: "heartbeatTime",
            label: "心跳时间",
            minWidth: 120
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
            minWidth: 80,
          },
          {
            prop: "lastUpdateUser",
            label: "更新人",
            minWidth: 80
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
