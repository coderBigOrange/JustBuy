<template>
  <div class="detail_base_info">
    <swiper-info :top-img="topImg" ></swiper-info>
    <price-info :goods-info="goodsInfo"></price-info>
    <store-info :store-info="storeInfo"></store-info>
  </div>
</template>
  
<script>
import SwiperInfo from './baseChildCmps/SwiperInfo';
import PriceInfo from './baseChildCmps/PriceInfo';
import StoreInfo from  './baseChildCmps/StoreInfo';
export default {
  name: "DetailBaseInfo",
  components: {
    SwiperInfo,
    PriceInfo,
    StoreInfo
  },
  props: {
    topImg: {
      type:　Array,
      default() {
        return [];
      }
    },
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    storeInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
}
</script>
  
<style scoped>
  
</style>