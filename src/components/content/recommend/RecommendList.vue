<template>
  <div class="recommend_list" v-if="getRec.length">
    <recommend-list-item v-for="(item, index) in getRec" :recommend-item="item" :key="index"/>
  </div>
</template>
  
<script>
import RecommendListItem from "./RecommendListItem";
export default {
  name: "RecommendList",
  components: {
    RecommendListItem
  },
  props: {
    recommend: Array,
    default() {
      return []
    }
  },
  computed: {
    getRec() {
      return this.recommend.length ? this.recommend : [];
    }
  }
}
</script>

<style scoped>
  .recommend_list {
    padding: 2px;

    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    /* justify-content: space-around; */

    background-color: #fff;
  }
</style>