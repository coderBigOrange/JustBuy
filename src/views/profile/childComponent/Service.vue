<template>
  <div class="service">
    <div class="header">工具与服务</div>
    <div class="service_bar">
      <div class="service_item" v-for="(item, index) in services" :key="index"><div><img :src="item.url"></div>{{item.name}}</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Service",
  props: {
    services: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
  
<style scoped>
  .service {
    margin-top: 10px;
    padding:10px;
    border-radius: 13px;
    font-size: 12px;
    color: black;
    background-color: #fff;
  }
  .header {
    font-size: 16px;
    font-weight: bold;
  }
  .service_bar {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    text-align: center;
  }
  .service_item {
    padding: 10px 0;
    width: 25%;
  }
  img {
    width: 40%;
  }
</style>