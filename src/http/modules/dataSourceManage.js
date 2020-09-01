import axios from '../axios'

/**
 * 数据源管理模块
 */

//分页查询
export const findPage = (data) => {
  return axios({
    url: '/datasource_manage/findByPage',
    method: 'post',
    data
  })
}

//批量删除
export const batchDelete = (data) => {
  return axios({
    url: '/datasource_manage/delete',
    method: 'post',
    data
  })
}

//保存
export const save = (data) => {
  return axios({
    url: '/datasource_manage/save',
    method: 'post',
    data
  })
}



