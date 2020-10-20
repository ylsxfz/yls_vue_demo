<template>
  <div class="page-container">
    <h1>测试页面</h1>
    <el-form :inline="true" ref="filters" :model="filters" :size="size">
       <el-form-item prop="selectValue">
         <base-select v-model="filters.selectValue" :options='options'></base-select>
       </el-form-item>
       <el-form-item prop="selectTime">
         <BaseDateTimeFrame v-model="filters.selectTime"></BaseDateTimeFrame>
       </el-form-item>
       <el-form-item>
         <kt-button icon="fa fa-plus" :label="$t('action.reset')" type="primary" @click="handleReset('filters')" />
       </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import BaseSelect from "@/views/Core/Component/BaseSelect"
  import BaseDateTimeFrame from "@/views/Core/Component/BaseDateTimeFrame"
  import KtButton from "@/views/Core/KtButton"
  //向外暴露的成员，可以使用任意变量来接收
  export default {
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
     * components 组件注册
     */
    components: {
      BaseSelect,
      BaseDateTimeFrame,
      KtButton,
    },

    /**
     *  data() 为变量赋值等
     */
    data() {
      return {
        size:'small',
        filters: {
          selectValue: '',
          selectTime: [],
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },

    /**
     * 注册方法函数
     */
    methods: {
      /* 获取下拉菜单的值 */
      getSelectValue: function(val) {
        this.filters.selectTime = val
        console.log("下拉菜单的值：", val)
      },

      /* 获取时间范围组件的值 */
      getSelectTImeFrame: function(val) {
        this.filters.selectTime = val
        console.log("时间范围组件的值：", val)
      },

      handleReset:function(formName){
        this.$refs[formName].resetFields()
      },

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

    },
  }
</script>

<style scoped>

</style>
