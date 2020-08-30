import axios from '../axios.js'

/**
 * 数据源管理模块
 */

//分页查询
export const findPage = (data) => {
  return axios({
    url : '/datasource_manage/findByPage',
    method: 'post',
    data
  })
}
