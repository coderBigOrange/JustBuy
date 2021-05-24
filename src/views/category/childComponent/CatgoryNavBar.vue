<template>
  <nav-bar class="catgory_nav" @leftClick="backClick">
    <img slot="left" class="nav-back" src="~assets/image/common/back.svg" alt="">
    
    <div slot="center" class="input_box">
      <div class="input_area">
        <label for="search"></label>
        <input class="search_input" name="search" type="text" placeholder="随心搜">
        <i class="search_icon"></i>
      </div>
    </div>
  </nav-bar>
</template>
  
<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: "CategoryNavBar",
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.replace('./home')
    }
  }
}
</script>
  
<style scoped>
  .catgory_nav {
    background-color:rgb(255, 255, 255);
    box-shadow: 0px 1px 1px rgba(116, 116, 116, .2);
  }
  .nav-back {
    margin-top: 10px;
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
    background-color: rgb(240, 239, 239);
    border-radius: 15px;
  }
  .search_input {
    background-color: rgb(240, 239, 239);
    outline: none;
    border: none;
  }
</style>