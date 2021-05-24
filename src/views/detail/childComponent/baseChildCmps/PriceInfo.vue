<template>
  <div class="price_info">
    <div class="price">
      ￥<span class="newPrice">{{getNewPrice}}</span>
      <span class="oldPrice">￥{{getOldPrice}}</span>
    </div>
    <div class="descr">
      <div class="goods_title">{{goodsInfo.title}}</div>
      <div class="goods_desc">{{goodsInfo.desc}}</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "PriceInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    isDataGetted() {
      return Object.keys(this.goodsInfo).length ? true : false;
    },
    getNewPrice() {
      return  this.isDataGetted ? this.goodsInfo.newPrice.toFixed(2) : 0;
    },
    getOldPrice() {
      return  this.isDataGetted ? this.goodsInfo.oldPrice.toFixed(2) : 0;
    }
  }
}
</script>
  
<style scoped>
  .price_info {
    padding: 8px;
    color: black;
    border: 2px solid rgb(255, 255, 255) ;
    background-color: #fff;
    border-radius: 0 0 5% 5%;
    box-shadow: 0px -1px 1px rgba(240, 226, 226, 0.8);
  }
  .price {
    font-size: 16px;
    color: red;
    background-color: #fff;
    line-height: 48px;
  }
  .newPrice {
    margin-right: 5px;
    color: red;
    font-size: 30px;
    font-weight: bold;
  }
  .oldPrice {
    text-decoration: line-through;
    font-size: 13px;
    color: grey;
  }
  .descr {
    background-color: #fff;
  }
  .goods_title {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  .goods_desc {
    padding-top: 10px;
    padding: 10px;
    font-size: 12px;
    color: grey;
  }
</style>