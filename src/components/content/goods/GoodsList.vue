<template>
  <div class="goods_list" v-if="getGoods.length">
    <goods-list-item v-for="(item, index) in getGoods" :goods-item="item" :key="index"></goods-list-item>
  </div>
</template>
  
<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: Array,
    default() {
      return []
    }
  },
  computed: {
    getGoods() {
      return this.goods.length ? this.goods : [];
    }
  },
  updated() {
    this.$emit("GoodsUpdated")
  }
}
</script>

<style scoped>
  .goods_list {
    padding: 2px;

    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    justify-content: space-around;

    background-color: #fff;
  }
</style>