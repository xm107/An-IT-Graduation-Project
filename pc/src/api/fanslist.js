import request from '@/utils/request'

export function getFansList (params) {
  return request({
    url: '/followers', // 请求地址
    params // es6写法
  })
}
