<template>
  <swiper v-if="topImg.length" :data-getted="dataGetted"> 
    <swiper-item v-for="(img, index) in topImg" :key="index">
      <a :href="img.link">
        <img :src="img.image">
      </a>
    </swiper-item>
  </swiper>
</template>
  
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index';

export default {
  name: "SwiperInfo",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImg :{
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    dataGetted() {
      return this.topImg.length > 0
    }
  }
}
</script>
  
<style scoped>
  
</style>