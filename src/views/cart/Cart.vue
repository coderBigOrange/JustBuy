<template>
  <div class="cart">
    <nav-bar class="cart_nav"><div slot="center">购物车({{cartListLength}})</div></nav-bar>
    <better-scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </better-scroll>
    <cart-bottom></cart-bottom>
    <!-- Cart为空时的背景 -->
    <div class="empty" v-show="!cartListLength"></div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartBottom from './childComponent/CartBottom'
import CartList from './childComponent/CartList'
import BetterScroll from 'components/common/betterscroll/BetterScroll'

import {mapGetters} from 'vuex'

export default {
 name: "Cart",
 components: {
   NavBar,
   CartBottom,
   CartList,
   BetterScroll
 },
 computed: {
   ...mapGetters(['cartListLength']),
 },
 activated() {
   this.$refs.scroll.refresh();
 }
};
</script>

<style scoped>
  .cart {
    height: calc(100vh - 49px);
    background-color: #fafafa;
  }
  .cart_nav {
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(116, 116, 116, .2);
    color: black;
  }
  .content {
    overflow: hidden;
    height: calc(100% - 44px - 44px);
  }
  .empty {
    position: absolute;
    top: 44px;
    bottom: 93px;
    left: 0;
    right: 0; 
    padding: 100px 0;
    text-align: center;
    font-size: 16px;
    color: rgb(66, 64, 64);
    background: url("~assets/image/cart/empty_bg.png")center center/30% no-repeat;
  }
</style>