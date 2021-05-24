<template>
  <nav-bar class="my_nav" @leftClick="backClick">
    <img slot="left" class="nav-back" src="~assets/image/common/back.svg" alt="">
    <div slot="center">我的随心购</div>
  </nav-bar>
</template>
  
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "MyNavBar",
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
  .my_nav {
    background-color:rgb(255, 255, 255);
    box-shadow: 0px 1px 1px rgba(116, 116, 116, .2);
    color: black;
    font-size: 16px;
    font-weight: normal;
  }
  .nav-back {
    margin-top: 10px;
  }
</style>