<template>
  <swiper :data-getted="dataGetted">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a href="">
        <img :src="item.image" @load="swiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>
  
<script>
 import {Swiper, SwiperItem} from 'components/common/swiper';
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    swiperImgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    }
  },
  computed: {
    dataGetted() {
      return this.banners.length > 0;
    }
  }
}
</script>
  
<style scoped>
  
</style>