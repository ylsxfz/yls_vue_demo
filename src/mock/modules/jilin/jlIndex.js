// 查询数据列表
export function listHighRiskCues(data) {
  let findPageData = {
    "code": 200,
    "msg": null,
    "data": {
      "pageNum": 1,
      "pageSize": 9,
      "totalSize": 12,
      "totalPages": 2,
      "content":[{
        "id":"001-123456",
        "name":"测试数据",
        "nickname":"18888886666"
      },{
        "id":"001-123456",
        "name":"测试数据",
        "nickname":"18888886666"
      },{
        "id":"001-123456",
        "name":"测试数据",
        "nickname":"18888886666"
      }],
    }
  }
  return {
    url: 'jl/listsHighRiskCues',
    type: 'post',
    data: findPageData
  }
}


// 查询数据列表
export function listJDSellers(data) {
  let findPageData = {
    "code": 200,
    "msg": null,
    "data": {
      "pageNum": 1,
      "pageSize": 9,
      "totalSize": 12,
      "totalPages": 2,
      "content":[{
        "id":"002-123456",
        "name":"测试数据",
        "nickname":"18888886666"
      },{
        "id":"002-123456",
        "name":"测试数据",
        "nickname":"18888886666"
      }],
    }
  }
  return {
    url: 'jl/listJDSellers',
    type: 'post',
    data: findPageData
  }
}



// 查询数据列表
export function listCriminalRecords(data) {
  let findPageData = {
    "code": 200,
    "msg": null,
    "data": {
      "pageNum": 1,
      "pageSize": 9,
      "totalSize": 12,
      "totalPages": 2,
      "content":[{
        "id":"003-123456",
        "name":"测试数据",
        "nickname":"18888886666"
      },{
        "id":"003-123456",
        "name":"测试数据",
        "nickname":"18888886666"
      }],
    }
  }
  return {
    url: 'jl/listCriminalRecords',
    type: 'post',
    data: findPageData
  }
}
