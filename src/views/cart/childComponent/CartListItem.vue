<template>
  <div class="car_li_item">
    <i class="icon_select" :class="{active: isActive}" @click="selectClick"></i>
    <div class="image_wrap">
      <img :src="cartListItem.image">
    </div>
    <div class="content">
      <div class="name">{{cartListItem.title}}</div>
      <div class="price_line">
        <div class="price">￥<em>{{cartListItem.price.toFixed(2)}}</em></div>
        <div class="num_wrap"><span @click="decrease" :class="{disable: getNum <= 1}">-</span><div>{{getNum}}</div><span @click="add">+</span></div>
      </div>
    </div>
  </div>
</template>
  
<script>
import {mapActions} from 'vuex'
export default {
  name: "CartListItem",
  props: {
    cartListItem: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions(['changeNum','changeSlec']),
    decrease() {
      if (this.cartListItem.count > 1) {
        this.changeNum({index: this.index, num: -1})
      }
    },
    add() {
      this.changeNum({index: this.index})
    },
    selectClick() {
      this.changeSlec(this.index)
     }
  },
  computed: {
    getNum() {
      return this.cartListItem.count;
    },
    isActive() {
      return this.cartListItem.selected;
    }
  }
}
</script>
  
<style scoped>
  .car_li_item {
    display: flex;
    color: black;
    height: 130px;
    margin-bottom: 2px;
    box-shadow: 0 1px 1px rgb(224, 224, 224);
    background-color: #fff;
  }
  .icon_select {
    height: 100%;
    width: 30px;
    display: inline-block;
    background: url('~assets/image/cart/unselect.png') 0 center/100% no-repeat;
  }
  .active {
    background: url('~assets/image/cart/select.png') 0 center/30px no-repeat;
  }
  .image_wrap {
    flex: 1;
    margin-top: 15px;
    height: 100%;
  }
  .image_wrap img{
    border-radius: 13px;
    height: 80%;
  }
  .content {
    flex: 2;
    margin: 16px;
    font-size: 12px;
  }
  .name {
    line-height: 18px;
  }
  .price_line {
    margin-top: 20px;
    display: flex;
  }
  .price {
    flex: 1;
    color: red;
  }
  .price em {
    font-size: 16px;
    font-style: normal;
  }
  .num_wrap {
    font-size: 14px;
    line-height: 18px;
    flex: 1
  }
  .num_wrap span {
    font-weight: bold;
    padding: 1px;
  }
  .disable {
    background-color: rgba(223, 222, 222,.1);
    color: rgb(226, 226, 226);
  }
  .num_wrap div {
    display: inline-block;
    margin: 0 2px;
    text-align: center;
    width: 30px;
    background-color:rgb(247, 247, 247);
  }
</style>