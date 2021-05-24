import request from './request'

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/multidata',
  })
}