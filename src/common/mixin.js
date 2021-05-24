import BackTop from 'components/content/backtop/BackTop';
//混入 (挖掘)
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000;
    }
  }
}