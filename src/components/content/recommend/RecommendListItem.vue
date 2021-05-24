<template>
  <div class="recommend_Item" @click="recommendClick">
    <img :src="recommendItem.image">

    <div class="recommend_Info">
      <p>{{recommendItem.title}}</p>
      <span class="price">￥{{recommendItem.price}}</span>
      <span class="collect">{{recommendItem.cfav}}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "RecommendListItem",
  props: {
    recommendItem: Object,
      default() {
        return {}
      }
  },
  methods: {
    recommendClick() {
      console.log('暂无');
    }
  }
}
</script>
  
<style scoped>
  .recommend_Item {
    padding: 0 5px 40px 2px;
    width: 33%;

    position: relative;
  }
  .recommend_Item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .recommend_Info {
    font-size: 12px;
    overflow: hidden;
    text-align: center;

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
  }
  .recommend_Info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-bottom: 5px;
  }
  .recommend_Info .price {
    color: var(--color-high-text);
    
    margin-right: 20px;
  }
  .recommend_Info .collect {
    position: relative;
  }
  .recommend_Info .collect::before {
    content: "";

    position: absolute;
    left: -15px;
    top: -1px;

    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/100%;
  }
</style>