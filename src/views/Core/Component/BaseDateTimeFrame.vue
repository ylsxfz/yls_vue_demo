<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-date-picker @change="changeTime" v-model="selectValue" value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange"
      range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Array,
      },
    },
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        //value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        selectValue:[]
      };
    },


    methods:{
      /* 获取时间 */
      changeTime:function(val){
        this.$emit("getSelectTImeFrame",val)
      }
    },
    watch: {
      //判断下拉框的值是否有改变
      value(val) {
        this.selectValue = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },

      selectValue(val, oldVal) {
        if (val != oldVal) {
          this.$emit("input", val); //③组件内对myResult变更后向外部发送事件通知
        }
      }
    },


  };
</script>
