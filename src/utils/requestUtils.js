/**
 * 表单提交统一封装
 * component: 当前组件
 * myFun: 响应处理函数
 */
export function submitCom (component,myFun){
  component.$refs.dataForm.validate((valid) => {
    if (valid) {
       component.$confirm('确认提交吗', '提示', {}).then(myFun)
    }
  })
}
