/*
 * 系统配置模块
 */

// 分页查询
export function findPage(params) {
  let findPageData = {
    "code": 200,
    "msg": null,
    "data": {
      "pageNum": 1,
      "pageSize": 10,
      "totalSize": 1,
      "totalPages": 1,
      "content": [
        {
          "id": 1,
          "createBy": "admin",
          "createTime": "2018-09-23T11:52:54.000+0000",
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "value": "#14889A",
          "label": "theme",
          "type": "color",
          "description": "主题色",
          "sort": 0,
          "remarks": "主题色",
          "delFlag": 0
        }
      ]
    }
  }
  return {
    url: 'sys/config/lists',
    type: 'post',
    data: findPageData
  }
}


/* 批量删除 */
export function batchDelete() {
  return {
    url: 'sys/config',
    type: 'delete',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}

/* 保存 */
export function save(params) {
  return {
    url: 'sys/config',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}