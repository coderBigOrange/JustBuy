<template>
  <div class="coupon_info">
    <div class="assets_item" v-for="(item, index) in getAssetsInfo" :key="index"><div>{{item.num}}</div><span>{{item.name}}</span></div>
    <div class="assets_all"><div><img src="~assets/image/profile/my_assets.png"></div><span>我的资产</span></div>
  </div>
</template>
  
<script>
export default {
  name: "CouponInfo",
  props: {
    assetsInfo: {
      type: Array,
      default() {
        return []
      }
    },
  },
  computed: {
    getAssetsInfo() {
      if (this.assetsInfo) {
        this.assetsInfo.forEach(item => {
            item.num = item.num.toString().replace(/\d+/, function(n){   
              return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
                  return $1+",";
                });
            })
        })
      }
      return this.assetsInfo
    }
  }
}
</script>
  
<style scoped>
  .coupon_info {
    display: flex;
    border-radius: 13px;
    padding-bottom: 10px;
    background-color: white;
  }
  .coupon_info>div {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: black;
  }
  .assets_item div, .assets_all div {
    line-height: 58px;
    font-size: 16px;
    font-weight: bold;
  }
  img {
    width: 30%;
  }
</style>