<template>
  <div class="feature">
    <div v-for="(item, index) in featureItem" class="feature_item" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "FeatureView",
  props: {
    featureItem: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>
  
<style scoped>
  .feature {
    padding: 15px 0 20px 0;
    border-bottom: 8px solid #eee;

    text-align: center;
    font-size: 12px;
    background-color: #fff;

    display: flex;
    flex-wrap: wrap;
  }
  .feature_item {
    width: 20%;
  }
  .feature_item img {
    margin: 5px 0 2px 0;


    width: 70%;
  }
  a {
    color: black;
  }
</style>