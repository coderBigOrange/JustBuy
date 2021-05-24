<template>
  <nav-bar @leftClick="sortClick">
    <img slot="left" src="~assets/image/home/cate.png" class="nav_back">
    <div slot="center" class="input_box">
      <div class="input_area">
        <label for="search"></label>
        <input type="text" name="search" class="input_search" placeholder="随心搜">
        <i class="search_icon"></i>
      </div>
    </div>
  </nav-bar>
</template>
  
<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: "HomeNavBar",
  components: {
    NavBar
  },
  methods: {
    sortClick() {
     this.$router.push('category')
   }
  }
}
</script>
  
<style scoped>
  .nav-back {
    size: contain;
  }
  .search_icon {
    display: block;
    float: left;
    width: 18px;
    height: 15px;
    margin: 8px 0 0 15px;
    position: relative;
    background:url('~assets/image/category/search.png') -80px 0/200px no-repeat;
  }
  .input_box {
    width: 100%;
  }
  .input_area {
    margin-top: 7px;
    line-height: 30px;
    height: 30px;
    font-size: 14px;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
  }
  .input_search {
    background-color: rgb(255, 255, 255);
    outline: none;
    border: none;
  }
</style>