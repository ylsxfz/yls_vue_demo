import axios from '../../axios'

/*
 * 用户管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/jl/caseModel/',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/jl/caseModel/',
        method: 'delete',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/jl/caseModel/lists/',
        method: 'post',
        data
    })
}
