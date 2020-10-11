<template>
  <div class="page-container">
    <div class="wrap">
      <div class="chart-wrap">
        <!-- 左侧导航 -->
        <div id="new-chart-palette" class="chart-palette"></div>
        <!-- 右测画布 -->
        <div id="new-chart-diagram" class="chart-diagram"></div>
      </div>


      <div>
        <button id="SaveButton" @click="save()">Save</button>
        <button @click="load()">Load</button>
        Diagram Model saved in JSON format:
      </div>
      <textarea id="mySavedModel" style="width:100%;height:300px">
      {
          "class": "go.GraphLinksModel",
          "linkFromPortIdProperty": "fromPort",
          "linkToPortIdProperty": "toPort",
          "nodeDataArray": [],
          "linkDataArray": []
      }
     </textarea>
    </div>
  </div>
</template>

<script>
  import go from 'gojs'
  const MAKE = go.GraphObject.make;
  export default {
    data() {
      return {
        myDiagram: '',

      }
    },
    mounted() {
      this.init()
    },
    methods: {
      //保持
      // Show the diagram's model in JSON format that the user may edit
      save:function() {
        this.saveDiagramProperties(); // do this first, before writing to JSON
        document.getElementById("mySavedModel").value = this.myDiagram.model.toJson();
        this.myDiagram.isModified = false;
      },
      //保存节点属性
      saveDiagramProperties:function() {
        this.myDiagram.model.modelData.position = go.Point.stringify(this.myDiagram.position);
      },

      //加载
      load:function() {
        this.myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
        this.loadDiagramProperties(); // do this after the Model.modelData has been brought into memory
      },

      //加载节点属性
      loadDiagramProperties:function(e) {
        // set Diagram.initialPosition, not Diagram.position, to handle initialization side-effects
        var pos = this.myDiagram.model.modelData.position;
        if (pos) this.myDiagram.initialPosition = go.Point.parse(pos);
      },

      //初始化
      init: function() {
        if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
        var $ = go.GraphObject.make; // for conciseness in defining templates
        // 初始化画布
        let myDiagram = this.$api.gojs_templete.initMyDiagram("new-chart-diagram");

        // 添加节点的模板
        myDiagram.nodeTemplateMap.add("double", this.$api.gojs_templete.getPictureNodeTemplate());

        // 添加连线的模板
        myDiagram.linkTemplate = this.$api.gojs_templete.getLinkTemplate();

        // 初始化左边的导航栏
        this.$api.gojs_templete.initMyPalette("new-chart-palette", myDiagram)
        // 赋值画布对象
        this.myDiagram = myDiagram
      },


    },



  }
</script>

<style lang="scss" scoped>
  .chart-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;

    .chart-palette {
      width: 180px;
      margin-right: 30px;
      background-color: white;
      //border: solid 2px rgb(244, 244, 244);
      border: solid 0.125rem #4D5859;
    }

    .chart-diagram {
      flex-grow: 1;
      height: 700px;
      margin-left: -1.875rem;
      background-color: white;
      border: solid 0.125rem #4D5859;
      border-left-width: 0rem;
      //border: solid 2px rgb(244, 244, 244);
    }
  }
</style>
