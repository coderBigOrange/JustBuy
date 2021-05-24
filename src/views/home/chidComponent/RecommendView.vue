<template>
  <div class="recommend">
    <div v-for="(item, index) in recommendItem" class="recommend_item" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "RecommendView",
  props: {
    recommendItem: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>
  
<style scoped>
  .recommend {
    padding: 5px 0;
    border-bottom: 8px solid #eee;

    text-align: center;
    font-size: 12px;

    display: flex;
    flex-wrap: wrap;
  }
  .recommend_item {
    width: 20%;
  }
  .recommend_item img {
    margin: 5px 0 2px 0;
    
    width: 60%;
  }
</style>