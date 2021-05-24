<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
import BScroll from 'better-scroll'
import {throttle} from 'common/utils'
export default {
  name: "BetterScroll",
  data() {
    return {
      BScroll: null,
      isOpen: true,
      loadMore: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpHeight: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
   BScroll
  },
  methods: {
    init() {
      this.BScroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpHeight
      })
    },
    refresh() {
      this.BScroll && this.BScroll.refresh()
    },
    scrollTo(x, y, time =300) {
      this.BScroll && this.BScroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.BScroll && this.BScroll.finishPullUp()
    }
  },
  mounted() {
    this.init();
    //节流控制上拉频率
    this.loadMore = throttle(() => {
      this.$emit("loadMore");
    }, 800);
    
    this.BScroll.on('scroll', position => this.$emit("contentScroll", position));
    this.BScroll.on('pullingUp', this.loadMore)
  }
}
</script>
  
<style scoped>
  
</style>