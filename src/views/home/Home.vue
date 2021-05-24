<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <tab-control class="tab1" ref="tab1" :titles="['流行', '新款', '热卖']" @tabClick="tabClick" v-show="isFixed"></tab-control>
    <better-scroll class="content" ref="scroll" 
                    :probeType=3 
                    :pullUpHeight="{threshold: -15}" 
                    @contentScroll="contentScroll" 
                    @loadMore="loadMore">
      <home-swiper ref="swiper" :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommendItem="recommendItem"/>
      <feature-view :feature-item="featureItem"/>
      <tab-control ref="tab2" :titles="['流行','新款','热卖']" @tabClick="tabClick"/>
      <goods-list :goods="getCurrentType" @GoodsUpdated="GoodsUpdated"></goods-list>
    </better-scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
  
<script>
import HomeNavBar from './chidComponent/HomeNavBar'
import HomeSwiper from  './chidComponent/HomeSwiper'
import recommendView from './chidComponent/RecommendView'
import FeatureView from './chidComponent/FeatureView'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import BetterScroll from 'components/common/betterscroll/BetterScroll'
import {getShops, swiperImg, recommendUrl, recommendTitle, featureUrl, featureTitle} from 'common/home'

import {getMultiData, getHomeGoods} from 'network/home'
import {throttle, debounce, dealImage} from 'common/utils'
import {backTopMixin} from 'common/mixin'

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommendItem: [],
      featureItem: [],
      title: ['pop', 'new', 'sell'],
      currentType: 'pop',
      goods: {
        'pop': {page:0, list:[]},
        'new': {page:0, list: []},
        'sell': {page:0, list: []}
      },
      isFixed: false,
      offsetTop: 0,
      contentScroll: null,
      GoodsUpdated: null
    }
  },
  mixins: [backTopMixin],
  components: {
    HomeNavBar,
    HomeSwiper,
    recommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BetterScroll
  },
  created() {
    //吸顶效果，经过测试此处用节流是优于防抖的（很多人说这里用防抖，可能是应用场景不同）
    //此处用防抖事件得缩小至10ms才能不出现tab-control跑到页面上头又'乍现'的情况
    this.contentScroll = throttle(position => {
      this.isFixed =  position.y < -this.offsetTop;
      this.listenShowBackTop(position);
    }, 100);
    //不过监听图片加载这种用防抖更加合适
    this.GoodsUpdated = debounce(() => this.$refs.scroll.refresh(), 100);

    this.getMultiData();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banners = dealImage(swiperImg);
        this.recommendItem = dealImage(recommendUrl, recommendTitle);
        this.featureItem = dealImage(featureUrl, featureTitle)
      })
    },
    getHomeGoods(type) {
      getHomeGoods().then(res => {
        this.goods[type].list.push(...getShops(type, this.goods[type].page));
        this.goods[type].page++;
      }, err => console.log(err.message))
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.offsetTop = this.$refs.tab2.$el.offsetTop;
    },
    tabClick(index) {
      this.$refs.tab1.currentIndex = index;
      this.$refs.tab2.currentIndex = index;
      this.currentType = this.title[index]; 
      this.isFixed && this.$refs.scroll.scrollTo(0, -this.offsetTop, 0)
    }
  },
  computed: {
    getCurrentType() {
      return this.goods[this.currentType].list;
    }
  }
}
</script>
  
<style scoped>
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab1 {
    position: relative;
    z-index: 9;
  }
</style>