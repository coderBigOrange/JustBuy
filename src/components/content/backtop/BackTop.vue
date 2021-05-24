<template>
  <div>
    <div class="back-top">
      <img src="~assets/image/common/top.png" alt="backtop">
    </div>
  </div>
</template>
  
<script>
export default {
  name: "BackTop",
}
</script>
  
<style scoped>
  .back-top {
    position: fixed;
    bottom: 70px;
    right: 10px;
  }
  .back-top img {
    height: 55px;
    width: 55px;
  }
</style>