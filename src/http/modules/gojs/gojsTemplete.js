/**
 * gojs 图表
 */

/**
 * 初始化：myDiagram--画布
 */
export const initMyDiagram = (divId) => {
  if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
  var $ = go.GraphObject.make; // for conciseness in defining templates
  let myDiagram =
    $(go.Diagram, divId, // must name or refer to the DIV HTML element
      {
        grid: $(go.Panel, "Grid",
          $(go.Shape, "LineH", {
            stroke: "lightgray",
            strokeWidth: 0.5
          }),
          $(go.Shape, "LineH", {
            stroke: "gray",
            strokeWidth: 0.5,
            interval: 10
          }),
          $(go.Shape, "LineV", {
            stroke: "lightgray",
            strokeWidth: 0.5
          }),
          $(go.Shape, "LineV", {
            stroke: "gray",
            strokeWidth: 0.5,
            interval: 10
          })
        ),
        "autoScale": go.Diagram.Uniform,
        "minScale": 0.2, //画布最小的比例
        "maxScale": 2.0, //画布最大的比例
        "padding": 10, //画布边距
        "draggingTool.isGridSnapEnabled": true,
        "grid.visible": true, //画布的网格显示
        "linkingTool.isUnconnectedLinkValid": false, //允许一条与空连接的线
        "relinkingTool.isUnconnectedLinkValid": false, //允许一条与空连接的线
        "draggingTool.dragsLink": true,
        "linkingTool.portGravity": 20,
        "relinkingTool.portGravity": 20,
        "relinkingTool.fromHandleArchetype": $(go.Shape, "Diamond", {
          segmentIndex: 0,
          cursor: "pointer",
          desiredSize: new go.Size(8, 8),
          fill: "tomato",
          stroke: "darkred"
        }),
        "relinkingTool.toHandleArchetype": $(go.Shape, "Diamond", {
          segmentIndex: -1,
          cursor: "pointer",
          desiredSize: new go.Size(8, 8),
          fill: "darkred",
          stroke: "tomato"
        }),
        "linkReshapingTool.handleArchetype": $(go.Shape, "Diamond", {
          desiredSize: new go.Size(7, 7),
          fill: "lightblue",
          stroke: "deepskyblue"
        }),
        "rotatingTool.handleAngle": 270,
        "rotatingTool.handleDistance": 30,
        "rotatingTool.snapAngleMultiple": 15,
        "rotatingTool.snapAngleEpsilon": 15,
        "undoManager.isEnabled": true
      });
  return myDiagram;
}




/**
 * 初始化--左侧导航
 */
export const initMyPalette = (divId, myDiagram) => {
  if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
  var $ = go.GraphObject.make; // for conciseness in defining templates
  // initialize the Palette that is on the left side of the page
  let myPalette =
    $(go.Palette, divId, // must name or refer to the DIV HTML element
      {
        maxSelectionCount: 1,
        nodeTemplateMap: myDiagram.nodeTemplateMap, // share the templates used by myDiagram
        linkTemplate: // simplify the link template, just in this Palette
          $(go.Link, { // because the GridLayout.alignment is Location and the nodes have locationSpot == Spot.Center,
              // to line up the Link in the same manner we have to pretend the Link has the same location spot
              locationSpot: go.Spot.Center,
              selectionAdornmentTemplate: $(go.Adornment, "Link", {
                  locationSpot: go.Spot.Center
                },
                $(go.Shape, {
                  isPanelMain: true,
                  fill: null,
                  stroke: "deepskyblue",
                  strokeWidth: 0
                }),
                $(go.Shape, // the arrowhead
                  {
                    toArrow: "Standard",
                    stroke: null
                  })
              )
            }, {
              routing: go.Link.AvoidsNodes,
              curve: go.Link.JumpOver,
              corner: 5,
              toShortLength: 4
            },
            new go.Binding("points"),
            $(go.Shape, // the link path shape
              {
                isPanelMain: true,
                strokeWidth: 2
              }),
            $(go.Shape, // the arrowhead
              {
                toArrow: "Standard",
                stroke: null
              })
          ),
        model: new go.GraphLinksModel([ // specify the contents of the Palette
          {
            modelId: 1,
            modelName: "测试",
            category: "double",
            paramDesc: "测试",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "测试"
          }, {
            modelId: 2,
            modelName: "测试",
            category: "double",
            paramDesc: "测试",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "测试"
          }, {
            modelId: 3,
            modelName: "测试",
            category: "double",
            paramDesc: "测试",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "测试"
          }, {
            modelId: 4,
            modelName: "开始",
            category: "double",
            paramDesc: "开始",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "开始"
          }, {
            modelId: 5,
            modelName: "结束",
            category: "double",
            paramDesc: "结束",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "结束"
          }, {
            modelId: 6,
            modelName: "测试",
            category: "double",
            paramDesc: "测试",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "测试"
          }, {
            modelId: 7,
            modelName: "测试",
            category: "double",
            paramDesc: "测试",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "测试"
          }, {
            modelId: 8,
            modelName: "测试",
            category: "double",
            paramDesc: "测试",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "测试"
          }, {
            modelId: 8,
            modelName: "测试",
            category: "double",
            paramDesc: "测试",
            modelColor: "black",
            modelImg: "static/gojs/test.png",
            modelTitle: "测试"
          },
        ])
      });
  return myPalette;
}

/**
 * 连线的模板
 */
export const getLinkTemplate = () => {
  if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
  var $ = go.GraphObject.make; // for conciseness in defining templates
  var linkSelectionAdornmentTemplate =
    $(go.Adornment, "Link",
      $(go.Shape,
        // isPanelMain declares that this Shape shares the Link.geometry
        {
          isPanelMain: true,
          fill: null,
          stroke: "deepskyblue",
          strokeWidth: 0
        }) // use selection object's strokeWidth
    );
  let linkeTemplate = $(go.Link, // the whole link panel
    {
      selectable: true,
      selectionAdornmentTemplate: linkSelectionAdornmentTemplate
    }, {
      relinkableFrom: true,
      relinkableTo: true,
      reshapable: true
    }, {
      routing: go.Link.AvoidsNodes,
      curve: go.Link.JumpOver,
      corner: 5,
      toShortLength: 4
    },
    new go.Binding("points").makeTwoWay(),
    $(go.Shape, // the link path shape
      {
        isPanelMain: true,
        strokeWidth: 2
      }),
    $(go.Shape, // the arrowhead
      {
        toArrow: "Standard",
        stroke: null
      }),
    $(go.Panel, "Auto",
      new go.Binding("visible", "isSelected").ofObject(),
      $(go.Shape, "RoundedRectangle", // the link shape
        {
          fill: "#F8F8F8",
          stroke: null
        }),
      $(go.TextBlock, {
          textAlign: "center",
          font: "10pt helvetica, arial, sans-serif",
          stroke: "#919191",
          margin: 2,
          minSize: new go.Size(10, NaN),
          editable: true
        },
        new go.Binding("text").makeTwoWay())
    ));

  return linkeTemplate
}

/**
 * 画布的节点模板
 */
export const getPictureNodeTemplate = () => {
  if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
  var $ = go.GraphObject.make; // for conciseness in defining templates
  let nodeTemplate = $(go.Node, "Vertical", {
      shadowColor: "black",
      fromLinkable: true,
      toLinkable: true,
      selectionAdornmentTemplate: $(go.Adornment, "Auto",
        $(go.Shape, "RoundedRectangle", {
          fill: null,
          stroke: "dodgerblue",
          strokeWidth: 1
        }),
        $(go.Placeholder)
      ),
      toolTip: $(go.Adornment, "Auto",
        $(go.Shape, {
          fill: "whitesmoke"
        }),
        $(go.TextBlock, {
            margin: new go.Margin(10, 5, 5, 5)
          },
          new go.Binding("text", "paramDesc")
        )
      )
    },
    new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
    $(go.Panel, "Auto",
      $(go.Picture, {
          desiredSize: new go.Size(66, 66),
        },
        new go.Binding("source", "modelImg")
      ),
      $(go.Panel, "Vertical", {
        width: 89,
        height: 82,
      })
    ),
    $(go.TextBlock, {
        alignment: go.Spot.Center,
        margin: new go.Margin(2, 0),
        fromLinkable: false,
        toLinkable: false,
        font: "10pt Helvetica, Arial, sans-serif",
        maxSize: new go.Size(70, NaN),
        wrap: go.TextBlock.WrapFit,
      },
      //	  	  	          new go.Binding("stroke", "modelColor").makeTwoWay(),
      //设置图片文字的颜色
      new go.Binding("stroke", "modelColor", function(v) {
        if (v != "black") {
          return "red";
        }
        return "black";
      }).makeTwoWay(),
      new go.Binding("text", "modelName").makeTwoWay())
  );

  return nodeTemplate
}
