<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  name: "Slide",
}
</script>
  
<style>
  .slide {
    width: 100%;
    /* flex-shrink为0表示子元素不缩小 */
    flex-shrink: 0;
  }

  .slide a img {
    /* 图片高度要不要调整 */
    width: 100%;
  }
</style>