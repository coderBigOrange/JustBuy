<template>
  <div class="store">
    <div class="store_info">
      <span class="store_avatar"><img :src="storeInfo.imgUrl" alt="avatar"></span>
      <div class="store_name">
        <div class="store_name">{{storeInfo.name}}</div>
        <p class="star">店铺星级: <img src="~assets/image/detail/star.png" v-for="index in storeInfo.starNum" :key="index"></p>
      </div>
    </div>
    <div class="store_desc">
      <div class="fans_num">
        <p class="num">{{storeInfo.fans}}</p>
        <p>粉丝数</p>
      </div>
      <div class="goods_num">
        <p class="num">{{storeInfo.fans}}</p>
        <p>商品总数</p>
      </div>
      <div class="evaluation">
        <p>评价 <span class="score">{{storeInfo.commentScore}}</span></p>
        <p>物流 <span class="score">{{storeInfo.transportScore}}</span></p>
        <p>售后 <span class="score">{{storeInfo.serviceScore}}</span></p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "StoreInfo",
  props: {
    storeInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>
  
<style scoped>
  .store {
    color: black;
    margin-top: 10px;
    padding: 18px;
    border-radius: 5%;
    background-color: #fff;
  }
  .store_info {
    padding-top: 10px;
    font-size: 10px;
    display: flex;
  }
  .store_avatar img{
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
  .store_name {
    font-size: 1.2em;
  }
  .star {
    background-color: rgb(247, 245, 245);
    color: grey;
  }
  .star img {
    height: 10px;
  }
  .store_desc {
    margin-top: 10px;
    font-size: 10px;
    color: gray;
    display: flex;
  }
  .fans_num {
    line-height: 20px;
    flex: 1;
    border-right: 1px solid rgb(219, 219, 219);
    text-align: center;
  }
  .goods_num {
    line-height: 20px;
    flex: 1;
    text-align: center;
  }
  .evaluation {
    line-height: 18px;
    text-align: left;
  }
  p.num {
    color: black;
    font-size: 1.6em;
  }
  span.score {
    color: red;
  }
</style>