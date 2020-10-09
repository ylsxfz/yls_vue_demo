/**
 * 表单响应统一封装
 */
export function getFormResponse  (component, res)  {
  if (res.code == 200) {
    component.$message({
      message: '操作成功',
      type: 'success'
    })
  } else {
    component.$message({
      message: '操作失败：' + res.msg,
      type: 'error'
    })
  }
  component.editLoading = false
  component.dialogVisible = false
  component.$refs['dataForm'].resetFields()
  component.findByPage(null)
}
