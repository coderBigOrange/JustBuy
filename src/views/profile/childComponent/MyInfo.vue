<template>
  <div class="my_info">
      <div class="user_info">
        <!-- 头像 -->
        <div class="avatar_wrap"><img :src="userInfo.avatar" ></div>
        <!-- 名字和vip等级 -->
        <div class="personal_wrap">
          <div class="name_wrap">
            <div >{{userInfo.name}}</div>
            <div class="vip_level"></div>
          </div>
          <div class="hor_tip">
            <span>随心值</span>
            <span>购物信用值: {{userInfo.credits}}</span>
          </div>
        </div>
      </div>
      <!-- 设置按钮 -->
      <div class="setting"><span class="setting_icon" @click="settingClick"></span></div>
      <!-- 商品、店铺收藏等信息 -->
      <div class="base_info">
        <div class="base_info_item"><div>{{userInfo.goodsCfav}}</div><span>商品收藏</span></div>
        <div class="base_info_item"><div>{{userInfo.storeCfav}}</div><span>店铺收藏</span></div>
        <div class="base_info_item"><div>{{userInfo.footPrint}}</div><span>我的足迹</span></div>
      </div>
      <!-- vip推荐栏 -->
      <div class="plus_wrap">
        <div class="plus_title">每月五张运费券</div>
        <div class="plus_sub_title">立即查看</div>
      </div>
  </div>
</template>
  
<script>
export default {
  name: "MyInfo",
  props: {
    userInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    settingClick() {
      console.log('setting');
    }
  }
}
</script>
  
<style scoped>
  .my_info {
    position: relative;
    padding: 12px 20px 10px 20px;
    color: white;
    background: url('~assets/image/profile/background.png') 0 0/cover no-repeat;
  }
  .user_info {
    display: flex;
    margin-bottom: 18px;
  }
  .avatar_wrap {
    width: 52px;
    height: 52px;
  }
  .avatar_wrap img {
    width: 100%;
  }
  .personal_wrap {
    font-size: 12px;
    margin-left: 15px;
  }
  .name_wrap {
    display: flex;
    padding: 0 5px;
    font-size: 18px;
  }
  .vip_level {
    position: relative;
    margin-left: 4px;
  }
  .vip_level::before {
    content: "";
    position: absolute;
    top: 1px;
    height: 15px;
    width: 15px;
    background: url('~assets/image/profile/vip_level.png') right 0 /cover no-repeat;
  }
  .hor_tip {
    margin-top: 10px;
    text-align: center;
  }
  .hor_tip span {
    margin-right: 5px;
    border-radius: 13px;
    padding: 2px 5px;
    background-color: rgba(0,0,0,.16);
  }
  .setting {
    position: absolute;
    top: 0;
    right: 18px;
    height: 40px;
    line-height: 40px;
  }
  .setting_icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    top: 14px;
    background: url('~assets/image/profile/setting.png') 0 0/100% no-repeat
  }
  .base_info {
    display: flex;
    text-align: center;
  }
  .base_info_item {
    flex: 1;
    font-size: 12px;
  }
  .base_info_item div {
    font-size: 16px;
    font-weight: bold;
  }
  .base_info_item span {
    line-height: 34px;
    display: block;
  }
  .plus_wrap {
    position: relative;
    display: flex;
    height: 42px;
    margin-top: 10px;
    padding: 0 10px;
    /* text-align: center; */
    justify-content: space-between;
    font-size: 11px;
    color: #ffe678;
    background: url('https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png') no-repeat 0 0/cover;
  }
  .plus_title {
    position: relative;
    margin-top: 12px;
    padding-left: 68px;
    flex: 1;
    height: 18px;
    line-height: 18px;
  }
  .plus_title::before {
    content: "";
    position: absolute;
    width: 57px;
    height: 12px;
    left: 0;
    top: 3px;
    background: url('https://img12.360buyimg.com/img/s113x21_jfs/t1/132167/33/1122/2973/5ed5c74bE41e02c41/5ae83d09fff874cb.png') no-repeat 100%;
    background-size: 100% 100%;
  } 
  .plus_sub_title {
   margin-top: 12px;
   padding: 2px 8px;
   height: 18px;
   line-height: 18px;
   border-radius: 13px;
   color: black;
   background-color: #ffe36f;
  }
  .plus_sub_title::after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    border-left: 3px solid black;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    margin-left: 4px;
    margin-bottom: 2px;
  }
</style>