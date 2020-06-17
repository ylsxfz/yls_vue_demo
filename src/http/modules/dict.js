import axios from '../axios'

/*
 * 字典管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/sys_dict/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/sys_dict/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/sys_dict/findByPage',
        method: 'post',
        data
    })
}
