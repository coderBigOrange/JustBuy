<template>
  <div class="categoty_content">
    <better-scroll class="content" ref="scroll">
      <h4 class="title">动态传入</h4>
      <ul class="goods_list">
        <li v-for="(img, index) in categoryGoodsList" :key="index">
          <img :src="img.image" @load="ImgLoad">
          <div class="text">{{img.text}}</div>
        </li>
      </ul>
    </better-scroll>
  </div>
</template>
  
<script>
import BetterScroll from 'components/common/betterscroll/BetterScroll'
import {debounce} from 'common/utils'
export default {
  name: "CategoryContent",
  components: {
    BetterScroll
  },
  data() {
    return {
      ImgLoad: debounce(() => {
        this.$refs.scroll.refresh();
      },100)
    }
  },
  props: {
    categoryGoodsList: {
      type: Array,
      default() {
        return []
      }
    },
    isRef: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  updated() {
    //检测isRef的变化,滚动到顶部
   this.$refs.scroll.scrollTo(0, 0, 0);
  }
}
</script>
  
<style scoped>
  .categoty_content {
    margin-left:87px;
    background-color: rgb(255, 255, 255);
    height: calc(100vh - 44px - 49px);
  }
  .content {
    height: 100%;
  }
  .title {
    padding-top: 20px;
    padding-left: 5px;
    font-size: 14px;
    font-weight: bold;
    color: black;
  }
  .goods_list {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  .goods_list li {
    width: 33%;
  }
  img {
    padding: 0 3px;
    width: 100%;
  }
  li div {
    text-align: center;
    height: 35px; 
    font-size: 12px;
    color: black
  }
</style>