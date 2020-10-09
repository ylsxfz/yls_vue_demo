<template>
  <div class="index-table-div">
    <!--表格栏-->
    <el-table class="index-table" :row-style="tableRowStyle" :header-cell-style="tableHeaderColor" :data="data.content"
       v-loading="loading" :element-loading-text="$t('action.loading')"
      :border="border" :stripe="stripe" :show-overflow-tooltip="showOverflowTooltip" :max-height="maxHeight" :size="size"
      :align="align" style="width:100%;">
      <el-table-column v-for="column in columns" header-align="center" align="center" :prop="column.prop" :label="column.label"
        :width="column.width" :min-width="column.minWidth" :fixed="column.fixed" :key="column.prop" :type="column.type">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'IndexTable',
    props: {
      columns: Array, // 表格列配置
      data: Object, // 表格分页数据
      permsEdit: String, // 编辑权限标识
      permsDelete: String, // 删除权限标识
      size: { // 尺寸样式
        type: String,
        default: 'mini'
      },
      align: { // 文本对齐方式
        type: String,
        default: 'left'
      },
      maxHeight: { // 表格最大高度
        type: Number,
        default: 800
      },
      showOperation: { // 是否显示操作组件
        type: Boolean,
        default: true
      },
      border: { // 是否显示边框
        type: Boolean,
        default: false
      },
      stripe: { // 是否显示斑马线
        type: Boolean,
        default: false
      },
      highlightCurrentRow: { // // 是否高亮当前行
        type: Boolean,
        default: true
      },
      showOverflowTooltip: { // 是否单行显示
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        // 分页信息
        pageRequest: {
          pageNum: 1,
          pageSize: 9
        },
        loading: false, // 加载标识
        selections: [] // 列表选中列
      }
    },
    methods: {
      /* 分页查询 */
      findPage: function() {
        this.loading = true
        let callback = res => {
          this.loading = false
        }
        this.$emit('findPage', {
          pageRequest: this.pageRequest,
          callback: callback
        })
      },

      /* 换页刷新 */
      refreshPageRequest: function(pageNum) {
        this.pageRequest.pageNum = pageNum
        this.findPage()
      },

      /* 设置表格行的样式 */
      tableRowStyle({
        row,
        rowIndex
      }) {
        return {
          // 'background': 'rgba(4, 82, 148,0.1)',
          // 'color':'#d5e4f6'
        }
      },

      /* 设置表头行的样式 */
      tableHeaderColor({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        return 'background-color:rgb(4, 82, 148);color:#ffffff;text-align:center'

      }
    },
    mounted() {
      this.refreshPageRequest(1)
    }
  }
</script>

<style>
  .index-table {
    border: 1px solid #60B3FC;
    margin: 0rem;
    padding: 0rem;
    background-color: rgb(250, 250, 250, 0.1);
  }
/*
  .index-table /deep/ .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
  }

  .index-table /deep/ .el-table tr {
    background-color: transparent !important;
  }

  .index-table /deep/ .el-table--enable-row-transition .el-table--enable-row-transition  .el-table__body td,
  .el-table .cell {
    background-color: transparent;
  }

  .el-table::before {
    //去除底部白线
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
  } */
</style>
