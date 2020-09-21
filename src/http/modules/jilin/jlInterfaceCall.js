import axios from '../../axios'

/*
 * 用户管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/jl/interfaceCall/',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/jl/interfaceCall/',
        method: 'delete',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/jl/interfaceCall/lists/',
        method: 'post',
        data
    })
}
