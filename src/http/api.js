/*
 * 接口统一集成模块
 */
import * as login from './modules/system/login'
import * as user from './modules/system/user'
import * as dept from './modules/system/dept'
import * as role from './modules/system/role'
import * as menu from './modules/system/menu'
import * as dict from './modules/system/dict'
import * as config from './modules/system/config'
import * as log from './modules/system/log'
import * as loginlog from './modules/system/loginlog'
// yls-component
import * as datasource_manage from './modules/example/dataSourceManage'
import * as request_utils from './modules/common/requestUtils'
import * as response_utils from './modules/common/responseUtils'
import * as echart_map from './modules/echarts/echartMap'
// jl
import * as jl_index from './modules/jilin/jlIndex'
import * as jl_case_model from './modules/jilin/jlCaseModel'
import * as jl_datasource_manage from './modules/jilin/jlDataSourceManage'
import * as jl_interface_call from './modules/jilin/jlInterfaceCall'

// 默认全部导出
export default {
  login,
  user,
  dept,
  role,
  menu,
  dict,
  config,
  log,
  loginlog,
  // yls-component
  datasource_manage,
  request_utils,
  response_utils,
  echart_map,
  // jl
  jl_index,
  jl_case_model,
  jl_datasource_manage,
  jl_interface_call,
}
