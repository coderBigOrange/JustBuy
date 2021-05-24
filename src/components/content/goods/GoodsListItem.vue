<template>
  <div class="goods_item" @click="goodsItemClick">
    <img v-lazy="showImg">

    <div class="goods_info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: Object,
      default() {
        return {}
      }
  },
  methods: {
    goodsItemClick() {
      this.$router.push('/detail/'+this.goodsItem.iid);
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image
    }
  }
}
</script>
  
<style scoped>
  .goods_item {
    padding-bottom: 40px;
    width: 48%;

    position: relative;
  }
  .goods_item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .goods_info {
    font-size: 12px;
    overflow: hidden;
    text-align: center;

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
  }
  .goods_info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-bottom: 5px;
  }
  .goods_info .price {
    color: var(--color-high-text);
    
    margin-right: 20px;
  }
  .goods_info .collect {
    position: relative;
  }
  .goods_info .collect::before {
    content: "";

    position: absolute;
    left: -15px;
    top: -1px;

    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/100%;
  }
</style>