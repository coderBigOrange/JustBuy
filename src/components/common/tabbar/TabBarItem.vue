<template>
  <div id="tab_bar_item" @click="itemClick">
    <div class="item_icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item_active_icon" v-show="isActive"><slot name="active_icon"></slot></div>
    <div class="item_text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>
  
<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.isActive ? {'color': '#f30c0c'} : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    }
  }
}
</script>
  
<style scoped>
  #tab_bar_item {
    flex: 1;
  }

  .item_icon img, .item_active_icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .item_text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>