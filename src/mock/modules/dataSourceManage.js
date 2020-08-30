/**
 *数据源管理界面
 */

//查询列表
export function findPage(params) {
  let findByPageData = {
    "code": 200,
    "msg": null,
    "data": {
      "pageNum": 1,
      "pageSize": 1,
      "totalSize": 1,
      "content": [{
        "id": "001",
        "name": "hive",
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      }]
    },
  }

  return {
    url: 'datasource_manage/findByPage',
    type: 'post',
    data: findByPageData
  }

}
