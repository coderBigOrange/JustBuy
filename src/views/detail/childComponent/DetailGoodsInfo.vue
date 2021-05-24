<template>
  <div class="detail-info">
    <div class="goods_image" v-for="(img, index) in goodsImg" :key="index">
      <img :src="img.image" alt="likeTaoBao" @load="imgLoad">
    </div>
  </div>
</template>
  
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsImg: {
      type:　Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit("detailImgLoad")
    }
  }
}
</script>
  
<style scoped>
  .goods_info {
    margin-top: 5px;
    background-color: #fff;
  }
  .goods_image img{
    width: 100%;
  }
</style>