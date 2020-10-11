<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-date-picker @change="changeTime" v-model="value" value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange"
      range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
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
        value:[]
      };
    },


    methods:{
      /* 获取时间 */
      changeTime:function(val){
        this.$emit("getSelectTImeFrame",val)
      }
    }


  };
</script>
