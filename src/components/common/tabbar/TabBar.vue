<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  name: "TabBar",
}
</script>
  
<style scoped>
  #tab_bar {
    height: 49px;
    border-top: 1px solid #eee;
    background-color:white;
    box-shadow: 0px -1px 1px rgba(150, 150, 150, .08);
    

    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;


    display: flex;
    text-align: center;
  }
</style>