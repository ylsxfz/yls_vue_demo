import axios from '../axios.js'

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


/**
 * 测试封装
 */
export const test = (component, res) => {
  if (res.code == 200) {
    component.$message({
      message: '操作成功',
      type: 'success'
    })
  } else {
    component.$message({
      message: '操作失败' + res.msg,
      type: 'error'
    })
  }
  component.editLoading = false
  component.dialogVisible = false
  component.$refs['dataForm'].resetFields()
  component.findByPage(null)
}


export const submitTest = (component,myFun) => {
  component.$refs.dataForm.validate((valid) => {
    if (valid) {
       component.$confirm('确认提交吗', '提示', {}).then(myFun)
    }
  })
}
