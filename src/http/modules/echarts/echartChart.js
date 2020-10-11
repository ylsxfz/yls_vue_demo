/**
 * echart 图表
 */

export const indexBarChart = (myChart) => {
  let option = {
      // backgroundColor: '#011c3a',
      xAxis: {
          data: ['001', '002', '003','004', '005', '006'],
          axisLine: {
              lineStyle: {
                  color: '#3d5269'
              }
          },
          axisLabel: {
              color: '#fff',
              fontSize: 14
          }
      },
      yAxis: {
          // name: "单位:次",
          nameTextStyle: {
              color: '#fff',
              fontSize: 16
          },
          axisLine: {
              lineStyle: {
                  color: '#3d5269'
              }
          },
          axisLabel: {
              color: '#fff',
              fontSize: 16
          },
          splitLine: {
              show:false,
              lineStyle: {
                  color: '#2d3d53'
              }
          },
          interval:100,

      },
      series: [{
          type: 'bar',
          barWidth: 20,
          itemStyle:{
              normal:{
                color: '#5ef3ff'
                  // color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  //     offset: 0,
                  //     color: '#5ef3ff'
                  // }, {
                  //     offset: 1,
                  //     color: '#06a4f4'
                  // }], false)
              }
          },
          label: {
              normal: {
                  show: true,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#ffffff',
                  position: 'top',
              }
          },
          data: [99, 89, 165,55,124,82]
      }]
  };
   myChart.setOption(option);
}


export const indexLineChart = (myChart) => {
  var charts = {
      unit: '',
      names: [''],
      lineX: ['一级','二级','三级','四级','五级'],
      value: [
          [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
      ]

  }
  var color = ['rgb(214, 70, 74']
  var lineY = []

  for (var i = 0; i < charts.names.length; i++) {
      var x = i
      if (x > color.length - 1) {
          x = color.length - 1
      }
      var data = {
          name: charts.names[i],
          type: 'line',
          color: color[x] + ')',
          smooth: true,
          areaStyle: {
              normal: {
                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  //     offset: 0,
                  //     color: color[x] + ', 0.3)'
                  // }, {
                  //     offset: 0.8,
                  //     color: color[x] + ', 0)'
                  // }], false),
                  color:'#643149',
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
              }
          },
          symbol: 'circle',
          symbolSize: 5,
          data: charts.value[i]
      }
      lineY.push(data)
  }

  let option = {
      // backgroundColor:'#0d235e',
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: charts.names,
          textStyle: {
              fontSize: 12,
              color: 'rgb(214, 70, 74)'
          },
          right: '4%'
      },
      grid: {
          top: '14%',
          left: '4%',
          right: '4%',
          bottom: '12%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: charts.lineX,
          axisLabel: {
              textStyle: {
                  color: 'rgb(0,253,255,0.6)'
              },
              formatter: function(params) {
                  return params.split(' ')[0]
              }
          }
      },
      yAxis: {
          name: charts.unit,
          type: 'value',
          axisLabel: {
              formatter: '{value}',
              textStyle: {
                  color: 'rgb(0,253,255,0.6)'
              }
          },
          splitLine: {
              show:false,
              lineStyle: {
                  color: 'rgb(23,255,243,0.3)'
              }
          },
          axisLine: {
              lineStyle: {
                  color: 'rgb(0,253,255,0.6)'
              }
          }
      },
      series: lineY
  }

  myChart.setOption(option)


}
