<template>
  <div class="nav_bar">
    <div class="left" @click="leftClick"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
  
<script>
export default {
  name: "NavBar",
  methods: {
    leftClick() {
      this.$emit("leftClick")
    }
  }
}
</script>
  
<style scoped>
  .nav_bar {
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: rgb(222, 59, 22);
    box-shadow: 0px 1px 1px rgba(245, 10, 10, 0.8);

    position: relative;
    z-index: 10;

    display: flex;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
    justify-content: center;
    display: flex;
  }
</style>