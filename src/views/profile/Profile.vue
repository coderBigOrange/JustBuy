<template>
  <div class="profile">
    <my-nav-bar/>
    <better-scroll class="content">
      <my-info :user-info="userInfo"/>
      <order-info/>
      <coupon-info :assets-info="assetsInfo"/>
      <service :services="services"/>
    </better-scroll>
  </div>
</template>

<script>
import MyNavBar from './childComponent/MyNavBar'
import MyInfo from './childComponent/MyInfo'
import OrderInfo from './childComponent/OrderInfo'
import service from './childComponent/Service'
import CouponInfo from './childComponent/CouponInfo'
import BetterScroll from 'components/common/betterscroll/BetterScroll'

import {getUserInfo} from 'network/profile'
import {userInfo, assetsInfo, services} from 'common/profile'

export default {
 name: "Profile",
 data() {
   return {
     userInfo,
     assetsInfo,
     services,
     BetterScroll
   }
 },
 components: {
   MyNavBar,
   MyInfo,
   OrderInfo,
   CouponInfo,
   service,
  BetterScroll
 },
 methods: {
   getUserInfo() {
     getUserInfo().then(res => {
       this.userInfo = userInfo
       this.assetsInfo = assetsInfo
       this.services = services
     }, err => {
       console.log('getUserInfo error')
     })
   }
 },
 mounted() {
   this.getUserInfo();
 }
};
</script>

<style scoped>
  .profile {
    height: 100vh;
    background-color: rgba(230, 230, 230, .5);
  }
  .content {
    height: calc(100% - 44px - 49px);
  }
</style>