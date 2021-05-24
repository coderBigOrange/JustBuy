
# About

技术栈 vue + vue-router + vuex 构建的移动端电商系统（模仿京东）；数据都是先真实向服务器发送请求（有一个服务器端口可以响应请求，只是没有合适的数据），之后在本地替换（大体逻辑需要数据时，向该接口发送请求，得到响应后再替换成所需数据（所有数据均存放在common下的对应页面中，如home页的数据存放于home.js中）

还有就是，本人是在B站上看coderWhy老师的vue视频入门的，所以整个项目的思想，组织，构建很多都是来源是coderWhy老师，包括那个可以响应的接口，也是coderWhy老师的服务器，奈何老师把地址改了，本人也没有服务器（也不好意思去问老师，毕竟没交一分钱学费😂），所以才想出这个妥协的办法；也正是看了coderWhy老师的视频后，出于对所学知识的巩固以及练练手的心态写的这个项目，取名为JustBuy也是因为看到有类似购物网站(假如你是马云，给你一千亿，随便买，所以想体验一下在自己写的“随便买”上随便买是什么感觉😎虽然都是女装，不是特殊癖好，只是单纯觉得写项目多少有点枯燥，看看美女图养眼🤣)。做完整个项目，个人感觉收获良多。在此先感谢一下coderWhy老师！😁。个人以为，本项目很适合练手，熟悉vue的使用，解决一些常见的问题，以及增强学习的兴趣，都大有助益，希望大家喜欢！


# 说明
>  如果对您喜欢本项目，或者本项目对您有帮助，请点 "Star" 支持一下 谢谢！
>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍
>  本项目取名为JustBuy,希望您能体验到随心购的快感！
## 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + axios + better-scroll + px2vw 


## 项目运行


```
npm install

npm run serve 

```
# 功能列表

- [x] 上拉加载更多 -- 完成
- [x] 点击查看商品详情 -- 完成
- [x] 加入购物车 -- 完成
- [x] 购买 -- 完成（较简单）
- [x] 吸顶效果-- 完成
- [x] 滚动与导航栏联动效果 -- 完成
- [x] 图片懒加载-- 完成
- [x] 轮播图-- 完成
- [x] 购物车结算/勾选/数量加减 -- 完成
- [x] 路由懒加载 -- 完成
- [x] 点击滑动效果 -- 完成


# 页面截图展示
##### 首页
<img width="205" alt="home" src="https://user-images.githubusercontent.com/59592969/119316863-0dfbcc80-bcaa-11eb-817a-7fcf43c86093.PNG">
##### 分类
<img width="205" alt="category" src="https://user-images.githubusercontent.com/59592969/119316986-34216c80-bcaa-11eb-9c19-c86d108fc179.PNG">
##### 购物车
<img width="203" alt="cart" src="https://user-images.githubusercontent.com/59592969/119317013-3be11100-bcaa-11eb-8f90-7071a987ddb7.PNG">
##### 我的
<img width="203" alt="profile" src="https://user-images.githubusercontent.com/59592969/119317040-426f8880-bcaa-11eb-92b1-b2729add57c4.PNG">
##### 详情
<img width="204" alt="detail" src="https://user-images.githubusercontent.com/59592969/119317077-4b605a00-bcaa-11eb-8334-47d2a0be58af.PNG">




