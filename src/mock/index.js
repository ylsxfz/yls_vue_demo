import Mock from 'mockjs'
import { baseUrl } from '@/utils/global'
import * as login from './modules/system/login'
import * as user from './modules/system/user'
import * as role from './modules/system/role'
import * as dept from './modules/system/dept'
import * as menu from './modules/system/menu'
import * as dict from './modules/system/dict'
import * as config from './modules/system/config'
import * as log from './modules/system/log'
import * as loginlog from './modules/system/loginlog'
import * as datasource_manage from './modules/example/dataSourceManage'

import * as jl_index from './modules/jilin/jlIndex'
import * as jl_case_model from './modules/jilin/jlCaseModel'
import * as jl_datasource_manage from './modules/jilin/jlDataSourceManage'
import * as jl_interface_call from './modules/jilin/jlInterfaceCall'

// 1. 开启/关闭[所有模块]拦截, 通过调[openMock参数]设置.
// 2. 开启/关闭[业务模块]拦截, 通过调用fnCreate方法[isOpen参数]设置.
// 3. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.
let openMock = true
fnCreate(user, openMock)
fnCreate(log, openMock)
fnCreate(loginlog, openMock)
fnCreate(login, openMock)
fnCreate(config, openMock)
fnCreate(dict, openMock)
fnCreate(dept, openMock)
fnCreate(menu, openMock)
fnCreate(role, openMock)
fnCreate(datasource_manage,openMock)
fnCreate(jl_index,openMock)
fnCreate(jl_case_model,openMock)
fnCreate(jl_datasource_manage,openMock)
fnCreate(jl_interface_call,openMock)




/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate (mod, isOpen = true) {

  if (isOpen) {
    for (var key in mod) {
      ((res) => {
        if (res.isOpen !== false) {
          let url = baseUrl
          if(!url.endsWith("/")) {
            url = url + "/"
          }
          url = url + res.url
          Mock.mock(new RegExp(url), res.type, (opts) => {
            opts['data'] = opts.body ? JSON.parse(opts.body) : null
            delete opts.body
            console.log('\n')
            console.log('%cmock拦截, 请求: ', 'color:blue', opts)
            console.log('%cmock拦截, 响应: ', 'color:blue', res.data)
            return res.data
          })
        }
      })(mod[key]() || {})
    }
  }
}
