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
import * as echart_map from './modules/echarts/echartMap'
import * as gojs_templete from './modules/gojs/gojsTemplete'

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
  echart_map,
  gojs_templete,
}
