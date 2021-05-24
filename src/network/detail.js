import request from './request';
//大概逻辑就是从主页点击某个商品，然后通过动态路由传入商品iid，根据iid发送网络请求回去商品信息等
//具体逻辑还是需要再理一理
//以下是模拟的发送网络请求
export function getGoodsInfo() {
  return request({
    url: 'home/multidata'
  })
}