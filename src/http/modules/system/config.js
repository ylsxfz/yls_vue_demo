import axios from '../../axios'

/*
 * 系统配置模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/sys_config/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/sys_config/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/sys_config/findByPage',
        method: 'post',
        data
    })
}
