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
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "002",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "003",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "004",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "005",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "006",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "007",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "006",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "007",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "006",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "007",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "006",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "007",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "006",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
        "ip": "192.168.0.1",
        "status": "onLine",
        "heartbeatTime": "2020-08-30 16:00:00",
        "createTime": "2020-08-30 08:00:00",
        "createUser": "yls",
        "lastUpdateUser": "xfz",
        "lastUpdateTime": "2020-08-30 16:00:00"
      },{
        "id": "007",
        "name": "hive",
        "connType": "hive",
        "username": 'yls',
        "password": '123456',
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

//批量删除
export function batchDelete() {
  return {
    url: 'datasource_manage/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}


//保存
export function save() {
  return {
    url: 'datasource_manage/save',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
