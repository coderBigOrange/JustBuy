<template>
  <div class="detail_bottom">
    <div class="bar_item bottom_left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collec"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar_item bottom_right">
      <div class="add_cart" @click="addCart">加入购物车</div>
      <div class="pay" @click="payNow">立即购买</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit("addCart")
    },
    payNow() {
      this.$emit("payNow")
    }
  }
}
</script>
  
<style scoped>
  .detail_bottom {
    position: relative;
    height: 49px;
    width: 100%;

    text-align: center;
    font-size: 14px;
    box-shadow: 0 -2px 10px rgba(106, 106, 106, .2);
    background-color: #fff;

    display: flex;
  }
  .bar_item {
    flex: 1;
    display: flex;
  }
  .icon{
    display: block;
    margin: 3px auto 5px 19px;
    width: 22px;
    height: 22px;
    background-image: url('~assets/image/detail/detail_bottom.png');
    background-position: 0 0;
    background-size: 100%;
  }
  .service {
    background-position: 0 -52px;
  }
  .shop {
    background-position: 0 -97px;
  }
  .bar_item>div {
    flex: 1;
    color: black;
    font-size: 13px;
  }
  .bottom_right>div {
    height: 35px;
    line-height: 35px;
    margin: 7px 5px 0 0; 
    border-radius: 15px;

    font-size: 13px;
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .add_cart {
    background-color: #ffba0d;
  }
  .pay {
    background-color: #f2140c;
  }
</style>