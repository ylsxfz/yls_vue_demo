<template>
  <el-select v-model="value" placeholder="请选择" @change="handleButton">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
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
        value: ''
      }
    },

    methods: {
      // 下拉框点击事件
      handleButton() {
        /* 子组件通过事件发射向父组件传递事件及参数，$emit即为发射事件
           第一个参数为向父组件传递的事件名，第二个参数为向父组件传递的参数 */
        this.$emit('handleButton', this.value);
      }
    },


    watch: {
      //判断下拉框的值是否有改变
      value(val) {
        this.value = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },

      svalue(val, oldVal) {
        if (val != oldVal) {
          this.$emit("input", val); //③组件内对myResult变更后向外部发送事件通知
        }
      }
    },
  }
</script>
