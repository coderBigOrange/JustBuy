<template>
  <div class="order_info">
    <div class="wait_pay">
      <div><img src="~assets/image/profile/on_pay.png" alt=""></div>
      <span>待付款</span>
    </div>
    <div class="wait_receive">
      <div><img src="~assets/image/profile/on_receive.png" alt=""></div>
      <span>待收货</span>
    </div>
    <div class="refund">
      <div><img src="~assets/image/profile/refund.png" alt=""></div>
      <span>退货/售后</span>
    </div>
    <div class="order">
      <div><img src="~assets/image/profile/order.png" alt=""></div>
      <span>待付款</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "OrderInfo",
}
</script>
  
<style scoped>
  .order_info {
    display: flex;
    position: relative;
    z-index: 1;
    margin: -10px 0 10px 0;
    padding: 20px 0;
    font-size: 12px;
    color: black;
    border-radius: 13px;
    text-align: center;
    background-color: rgb(255, 255, 255);
  }
  .order_info>div {
    flex: 1;
    
  }
  div img {
    width: 30%;
  }
</style>