<template>
  <div class="detail_recommend">
    <div class="rec_head">猜你喜欢</div>
    <recommend-list :recommend="recommendGoods"/>
  </div>
</template>
  
<script>
import RecommendList from 'components/content/recommend/RecommendList'
export default {
  name: "DetailRecommend",
  props: {
    recommendGoods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    RecommendList
  }
}
</script>
  
<style scoped>
  .detail_recommend {
    margin-top: 10px;
    border-radius: 12px 12px 0 0;
    background-color: #fff;
  }
  .rec_head::before {
    content: " ";
    margin-right: 5px;
    border: 1px red solid;
    background-color: red;
  }
  .rec_head {
    margin-left: 20px;
    line-height: 45px;
    color: black;
    font-weight: bold;
  }
</style>