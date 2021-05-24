import request from './request';
//以下是模拟的发送网络请求
export function getCategoryInfo(id) {
  return request({
    url: 'home/multidata'
  })
}
export function getSortsList() {
  return request({
    url: 'home/multidata'
  })
}