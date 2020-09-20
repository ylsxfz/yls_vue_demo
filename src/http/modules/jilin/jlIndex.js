import axios from '../../axios'

//查询数据列表
export const listHighRiskCues = (data) =>{
  return axios({
    url:'/jl/listsHighRiskCues',
    method:'post',
    data
  })
}

//查询数据列表
export const listJDSellers  = (data) =>{
  return axios({
    url:'/jl/listJDSellers',
    method:'post',
    data
  })
}


//查询数据列表
export const listCriminalRecords = (data) =>{
  return axios({
    url:'/jl/listCriminalRecords',
    method:'post',
    data
  })
}
