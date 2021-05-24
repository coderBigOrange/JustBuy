<template>
  <div class="root_list">
    <better-scroll class="content" ref="scroll">
      <ul>
        <li @click="sortClick(index)" :class="{active: currentindex === index}" v-for="(item, index) in sortsList" :key="index">{{item}}</li>
      </ul>
    </better-scroll>
  </div>
</template>
  
<script>
import BetterScroll from 'components/common/betterscroll/BetterScroll'
export default {
  name: "RootList",
  data() {
    return {
      currentindex: 0,
    }
  },
  components: {
    BetterScroll
  },
  props: {
    sortsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    sortClick(index) {
      this.currentindex = index
      //这里以index 模拟表示id，（实在是不想再构造数据了）
      //逻辑就是点击该项，发送事件给父组件，根据点击项请求相应数据
      this.$emit("sortClick", index);
      let len = this.sortsList ? this.sortsList.length : 0;
      let destination = -((index-1) * 46 + 44);
      //这个12是大概值,547px的显示区，大概能放下12个rootListItem
      if (len - index >= 12)
     {this.$refs.scroll.scrollTo(0, destination, 500)}
    }
  },
  updated() {
    this.$refs.scroll.refresh();
  }
}
</script>
  
<style scoped>
  .root_list {
    float: left;
    width: 86px;
    height: calc(100vh - 44px - 49px);
    box-shadow: 1px 0 1px rgba(238, 238, 238, 0.5);
    font-size: 14px;
    color: black;
    background-color:rgba(247, 247, 247, 0.5);
  }
  .content {
    height: 100%;
  }
  .root_list ul li {
    height: 46px;
    line-height: 46px;
    text-align: center;
  }
  .active {
    background-color: #fff;
    color: #e93b3d;
  }
</style>