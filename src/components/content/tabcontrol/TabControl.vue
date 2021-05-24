<template>
  <div class="tab-control">
    <div  v-for="(item,index) in titles" 
          class="tab-control-item"
          :class="{active:currentIndex === index}"
          @click="itemClick(index)" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    },
  }
}
</script>
  
<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 14px;

    background-color: rgb(255, 255, 254);
    box-shadow: 0px -1px 1px rgba(129, 104, 104, 0.1);
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item.active {
    color: var(--color-high-text);
  }
  .active span {
    padding: 5px;
    border-bottom: 3px solid var(--color-high-text);
  }
</style>