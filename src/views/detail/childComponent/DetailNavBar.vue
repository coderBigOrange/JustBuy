<template>
  <nav-bar class="nav_bar" @leftClick="backClick">
      <img slot="left" class="nav_back" src="~assets/image/common/back.svg">
      <div slot="center" class="info" 
            v-for="(item, index) in info" 
            :key="index" 
            :class="{active: currentIndex === index}" 
            @click="itemClick(index)">
        {{item}}
      </div>
    </nav-bar>
</template>
  
<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      info: ['商品', '评价', '详情', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.$emit("navbarItemClick", index);
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  }
}
</script>
  
<style scoped>
   .nav_bar {
    background-color:rgb(255, 255, 255);
    box-shadow: 0px 1px 1px rgba(116, 116, 116, .2);
  }
  .nav_back {
    margin-top: 10px;
  }
  .info {
    flex: 1;
    font-size: 14px;
    color: black;
    font-weight: normal;
  }
  .active {
    color: red;
  }
</style>