import axios from '../../axios'

/*
 * 机构管理模块
 */

/* 保存 */
export const save = (data) => {
  return axios({
    url: '/sys/dept',
    method: 'post',
    data
  })
}

/* 删除 */
export const batchDelete = (data) => {
  return axios({
    url: '/sys/dept',
    method: 'delete',
    data
  })
}

/* 查询机构树 */
export const findDeptTree = () => {
  return axios({
    url: '/sys/dept/lists',
    method: 'get'
  })
}
