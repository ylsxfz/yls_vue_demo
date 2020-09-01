/**
 * echart 图表
 */

export const barGraphMore = (myChart) => {
  let option = {
    backgroundColor: "#404A59",
    color: ['#ffd285', '#ff733f', '#ec4863'],

    title: [{
      text: '城市宝周新增用户报表',
      left: '1%',
      top: '6%',
      textStyle: {
        color: '#fff'
      }
    }, {
      text: '用户来源占比',
      left: '83%',
      top: '6%',
      textAlign: 'center',
      textStyle: {
        color: '#fff'
      }
    }],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      x: 300,
      top: '7%',
      textStyle: {
        color: '#ffd285',
      },
      data: ['在大理', '标准版', '潍V']
    },
    grid: {
      left: '1%',
      right: '35%',
      top: '16%',
      bottom: '6%',
      containLabel: true
    },
    toolbox: {
      "show": false,
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      "axisLine": {
        lineStyle: {
          color: '#FF4500'
        }
      },
      "axisTick": {
        "show": false
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      "axisLine": {
        lineStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      "axisTick": {
        "show": false
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      type: 'value'
    },
    series: [{
        name: '在大理',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: [90, 50, 39, 50, 120, 82, 80]
      }, {
        name: '标准版',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: [70, 50, 50, 87, 90, 80, 70]
      }, {
        name: '潍V',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: [290, 200, 20, 132, 15, 200, 90]
      },
      {
        type: 'pie',
        center: ['83%', '33%'],
        radius: ['25%', '30%'],
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 335,
          name: '用户来源分析',
          itemStyle: {
            normal: {
              color: '#ffd285'
            }
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                color: '#ffd285',
                fontSize: 20

              }
            }
          }
        }, {
          value: 180,
          name: '占位',
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#87CEFA'
            }
          },
          label: {
            normal: {
              textStyle: {
                color: '#ffd285',
              },
              formatter: '\n手机号注册'
            }
          }
        }]
      },


      {
        type: 'pie',
        center: ['83%', '72%'],
        radius: ['25%', '30%'],
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 435,
          name: '用户来源分析',
          itemStyle: {
            normal: {
              color: '#ff733f'
            }
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                color: '#ff733f',
                fontSize: 20

              }
            }
          }
        }, {
          value: 100,
          name: '占位',
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#87CEFA'


            }
          },
          label: {
            normal: {
              textStyle: {
                color: '#FF4500',
              },
              formatter: '\n三方快捷登陆'
            }
          }
        }]
      }
    ]
  }

  myChart.setOption(option)
}


export const topologicalGraph = (myChart) => {
  let nodes = [{
      x: 500,
      y: 1000,
      nodeName: '应用',
      svgPath: 'M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0',
      symbolSize: 70,

    }, {
      x: 100,
      y: 600,
      nodeName: '模块1',
      svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
    },
    {
      x: 500,
      y: 600,
      nodeName: '模块2',
      svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
    },
    {
      x: 900,
      y: 600,
      nodeName: '模块3',
      svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
    },
    {
      x: 0,
      y: 300,
      nodeName: '节点1',
      svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
    },
    {
      x: 300,
      y: 300,
      nodeName: '节点2',
      svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
    },
    {
      x: 700,
      y: 300,
      nodeName: '节点3',
      svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
    },
    {
      x: 1000,
      y: 300,
      nodeName: '节点4',
      svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
    },
  ]


  let charts = {
    nodes: [],
    linesData: [{
        coords: [
          [500, 1000],
          [500, 800],
        ]
      }, {
        coords: [
          [500, 800],
          [100, 800],
          [100, 600]

        ]
      }, {
        coords: [
          [500, 800],
          [500, 600],

        ]
      }, {
        coords: [
          [500, 800],
          [900, 800],
          [900, 600]

        ]
      },
      {
        coords: [
          [100, 600],
          [0, 300]
        ]
      },
      {
        coords: [
          [100, 600],
          [300, 300]
        ]
      },
      {
        coords: [
          [900, 600],
          [700, 300]
        ]
      },
      {
        coords: [
          [900, 600],
          [1000, 300]
        ]
      }
    ]
  }

  for (var j = 0; j < nodes.length; j++) {
    const {
      x,
      y,
      nodeName,
      svgPath,
      symbolSize
    } = nodes[j];
    var node = {
      nodeName,
      value: [x, y],
      symbolSize: symbolSize || 50,
      symbol: 'path://' + svgPath,
      itemStyle: {
        color: 'orange',
      }
    }
    charts.nodes.push(node)
  }


  let option = {
    backgroundColor: "#0B1321",
    xAxis: {
      min: 0,
      max: 1000,
      show: false,
      type: 'value'
    },
    yAxis: {
      min: 0,
      max: 1000,
      show: false,
      type: 'value'
    },
    series: [{
      type: 'graph',
      coordinateSystem: 'cartesian2d',
      label: {
        show: true,
        position: 'bottom',
        color: 'orange',
        formatter: function(item) {
          return item.data.nodeName
        }
      },
      data: charts.nodes,
    }, {
      type: 'lines',
      polyline: true,
      coordinateSystem: 'cartesian2d',
      lineStyle: {
        type: 'dashed',
        width: 2,
        color: '#175064',
        curveness: 0.3

      },
      effect: {
        show: true,
        trailLength: 0.1,
        symbol: 'arrow',
        color: 'orange',
        symbolSize: 8
      },
      data: charts.linesData
    }]
  }

  myChart.setOption(option)
}


export const barGraphDynamic = (myChart) => {
  var fontColor = '#30eee9';
  let option = {
    backgroundColor: '#11183c',
    grid: {
      left: '5%',
      right: '10%',
      top: '20%',
      bottom: '15%',
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'item'
    },
    legend: {
      show: true,
      x: 'center',
      y: '35',
      icon: 'stack',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#1bb4f6'
      },
      data: ['已采纳', '已发布', '浏览量']
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        color: fontColor
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#397cbc'
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#195384'
        }
      },
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        name: '信息量',
        min: 0,
        max: 1000,
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#2ad1d2'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#27b4c2'
          }
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#11366e'
          }
        }
      },
      {
        type: 'value',
        name: '浏览量',
        min: 0,
        max: 1000,
        axisLabel: {
          formatter: '{value} 人',
          textStyle: {
            color: '#186afe'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#186afe'
          }
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#11366e'
          }
        }
      }
    ],
    series: [{
        name: '已采纳',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#0092f6',
            lineStyle: {
              color: "#0092f6",
              width: 1
            },
            areaStyle: {
              //color: '#94C9EC'
              color: 'rgba(7,44,90,0.3)',
            }
          }
        },
        markPoint: {
          itemStyle: {
            normal: {
              color: 'red'
            }
          }
        },
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
      },
      {
        name: '已发布',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: 8,

        itemStyle: {
          normal: {
            color: '#00d4c7',
            lineStyle: {
              color: "#00d4c7",
              width: 1
            },
            areaStyle: {
              //color: '#94C9EC'
              color: 'rgba(7,44,90,0.3)',
            }
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
      },
      {
        name: '浏览量',
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#aecb56',
            lineStyle: {
              color: "#aecb56",
              width: 1
            },
            areaStyle: {
              //color: '#94C9EC'
              color: 'rgba(7,44,90,0.3)',
            }
          }
        },
        data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
      }
    ]
  };

  myChart.setOption(option)
}


export const barGraphStatic = (myChart) => {
  var salvProName = ["安徽省", "河南省", "浙江省", "湖北省", "贵州省", "江西省", "江苏省", "四川省", "云南省", "湖南省"];
  var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55];
  var salvProMax = []; //背景按最大值
  for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0])
  }
  let option = {
    backgroundColor: "#003366",
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      top: '2%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function(params) {
        return params[0].name + ' : ' + params[0].value
      }
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: salvProName
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '12'
        },
      },
      data: salvProValue
    }],
    series: [{
        name: '值',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            // color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //   offset: 0,
            //   color: 'rgb(57,89,255,1)'
            // }, {
            //   offset: 1,
            //   color: 'rgb(46,200,207,1)'
            // }]),
          },
        },
        barWidth: 20,
        data: salvProValue
      },
      {
        name: '背景',
        type: 'bar',
        barWidth: 20,
        barGap: '-100%',
        data: salvProMax,
        itemStyle: {
          normal: {
            color: 'rgba(24,31,68,1)',
            barBorderRadius: 30,
          }
        },
      },
    ]
  };

  myChart.setOption(option);

}


export const barGraphCircle = (myChart) => {
  //数据
  var XName = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  var data1 = [67, 97, 51, 338, 32, 11, 1]
  var img = [
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC',
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAACqNJiGAAAACXBIWXMAAAsSAAALEgHS3X78AAAGS0lEQVR42u2cz4skSRXHPy8iMrOrq7qnp3dqloEeD0PvHrbxB/TJkwt6EGVBwRHUf0BPXj146JPgosJe/PEX6NoHYUUE8bCC11ZQtw+DLMq2DtPlbM9MVXVVZkbE85DVXdU97e6yi1U9TXwhyaIq4lXmh29ERrxXlKgqSR9OJiFI8BK8BC/BS0rwErwEL8FLSvASvAQvwUvwkhK8BC/BS/CSErwEL8FL8JISvI8udxkvShA5/55y+QrMchmK3hfBej9dBpgLhXcBNIGd9+ix03C7JBAXBm8GnEzBvDV53bvAid3JhW7pDGBdJMC5wzvnNoG7U2B7fWF7G/aPhJdmWu0DL11X9vZge0WnIHd11onzhrgoeDJ1Wk/gRYEjgYHA88LBUNiY6XQAbLQVHih0FK4r3JtAPHWizhueWYzrZsDtdw28Y6BtKJfbVHWbDSzvxg5la413Y4cNLFXdZtxepV4q4B3T9OtJE2fnQz94ngnnzYCTqeO6DbT7Dw1uyZBlHTreM3QBqacgNFPa3jJwjhg85fExt56LMIzQizMOnOscOO9F8tPgyv4ymVi6WExdMbJgbYZ1GSU51mVYmzGyYOqK9ViTiaXsL0PbNHFOHIhcuWF7drhCM8cNhLK/zBCLW7fQcqegqphjNMfRnKuYnwKl5XDrliETgIPJnDmNP6/hO+cdxonrEOgYCipGtcOWjqF3mJal9A6Lxahg7QZB1nB6RKX/pMg8w5FgnUCoKTIPHQNHOnHfU+vAKzJsd+SM6x48NpAb1jKDwVLmjljfJONFRL5CaX8A5tcQ7yHmAS2TIVVGmTsMlrWs6f/gsTnnPrmC8IA3e8L+UbMcydfbPBoaBlhELctqCTJAwwHoZ4BPA6/hydH4I8rwDSqzRaE3ELUMsDwaGvL1NjzfxH2zd7XmvDPzz8vQLH6HgpYekxnEGcZYZAJRnCPG7+L44nf4wgG5dcBfQL4M+hDlVtPeGUxm0NLDsFlUv/zR9suXP6vy94HQdkKx6pHjDBCWW4IPn0D5JF7/+Cn5WPx++OrPWpK/8Pnw8cFr/O7rv4p/fh1nKjL5D84JYSSIF1iuuf9EGHph86rm83bfusAJKyCFgBeCCvBNNB5/y3z2lRb5C80FSudLsv0KRIEolLFpL4XAygf8nmcd3t0tPTeeLQDHwBiAv2H0c2RmNJbqyWzTUuo+mVGi/B5YYzzpd6K8aP/P77lCi2TY7ExvTkeKlorWCkbBRdD4bfP6G//i0S8GjP/Uo/+bn8gf3gCNID8FbqL1pN+oiRVCdSbunLSYTHJYUkLfYzqOlo1UMYJuEilBfgjht1+LP34VcYJ6JWjEmYDYnxO1RiXSMpEQlNhXqqJexG383513dp/ZbTIivq3cuBaJdUR9JEog+vsQIvBLkC2c1kStMeZ7GPsqUe6g9S3iOBAlNP3qyI1rEd+eZFq6c01PzSUxME1D3RX23jZs3zQ8bK+y0oZR7bGFYzzKsLnDeIcYg9QGMoFaUXsLWCaaf+N9j6VWTSg9rczRH8JzwyfsHUa278STHN884M1zzmsyH9sryn5HWW2N6fvINQnEQSBkniLW5FKhsUU0N1G/SZCKyD/I5K/kHBIyTxwErkmg7yOrrTH7nSYuWzrP7dk8ncdZ990RDrAUWLq5AbX01WKwjKxh2U+XHMdOaYVIJLAiASTQqyIlgQ0Ce2/rrOvmNWzNfCx3eiMT992JcF0ZDxoANQ6fC6HwBF9TmIog06MwFcHXhMLjc6GkoCQwHjRxtu/EWddd1XxekzbaBbinbN6OjAeRLDsm9KEeelZXalZCjffTYyXUrK7U1ENP6IMxY8aDyObtCPe0ibdz9Z62F7rv7q6y21U4ijy+3WSEi+Mh3banHkI5dmheUC15qiXPuCyoh0K37SmOh2Tjsul3FNntNvEWUElbZPXs6SLQadVscMEWq6OnVbQLij/zBreQYXt2/ttRmHHhYW9SkxgF9g4jHMbmPArQm3w+cRu7JzWLhdVuL0PRm7NOPMk4n9fJnnXnqWzxwn41oKoLPVDkwmMHg2Im5wvbLPra5TL9u8UHSWBepl9LSfprkGdqnZfgJSV4CV6Cl+AleEkJXoKX4CV4SQlegpfgJXgJXlKCl+AleAleUoKX4CV4V0//BfBm5Ekg9qBkAAAAAElFTkSuQmCC',
    'image://data:image/png;base64,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',
    'image://data:image/png;base64,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',
  ]

  var data = [{
    coords: [
      ['周一', 67],
      ['周二', 97],
      ['周三', 51],
      ['周四', 338],
      ['周五', 32],
      ['周六', 11],
      ['周日', 1],
    ]
  }]

  let option = {
    backgroundColor: '#0e2147',
    grid: {
      left: '10%',
      top: '10%',
      bottom: '10%',
      right: '10%',
    },
    legend: {
      type: "scroll",
      data: "来电量",
      itemWidth: 18,
      itemHeight: 12,
      textStyle: {
        color: "#00ffff",
        fontSize: 14
      },
    },
    yAxis: [{
      type: 'value',
      position: 'left',
      nameTextStyle: {
        color: '#00FFFF'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(135,140,147,0.8)'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
        fontSize: 14
      }
    }, ],
    xAxis: [{
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#0696f9',
        }
      },
      axisLabel: {
        inside: false,
        textStyle: {
          color: '#fff', // x轴颜色
          fontWeight: 'normal',
          fontSize: '14',
          lineHeight: 22
        }

      },
      data: XName,
    }, ],
    series: [{
        symbolSize: 150,
        symbol: img[2],
        name: '小灯光',
        type: "line",
        data: data1,
        itemStyle: {
          normal: {
            borderWidth: 5,
            color: '#0696f9',
          }
        }
      },
      {
        name: '滑行的光点',
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        symbolSize: 30,
        polyline: true,
        effect: {
          show: true,
          trailLength: 0,
          symbol: "arrow",
          period: 10, //光点滑动速度
          symbolSize: 150,
          symbol: img[0]
        },
        lineStyle: {
          normal: {
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: data
      }
    ],
  };

  myChart.setOption(option)
}
