import request from './request';
//以下是模拟的发送网络请求
export function getUserInfo() {
  return request({
    url: 'home/multidata'
  })
}