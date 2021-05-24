<template>
  <div id="detail">
    <detail-nav-bar ref="dnavbar" @navbarItemClick="scrollClick"/>

    <better-scroll class="content" ref="scroll"
                    :probeType=3
                    @contentScroll="contentScroll">
      <detail-base-info :top-img="topImg" :goods-info="goodsInfo" :store-info="storeInfo"/>
      <detail-comment ref="cmt" :goods-cmt="comment"/>
      <detail-goods-info ref="goodsInfo" :goods-img="goodsImg" @detailImgLoad="detailImgLoad"/>
      <detail-recommend ref="rec" :recommend-goods="recommendGoods" />
    </better-scroll>
    <detail-bottom-bar @addCart="addCart" @payNow="payNow" />
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
  
<script>
import DetailNavBar from './childComponent/DetailNavBar'
import DetailBaseInfo from './childComponent/DetailBaseInfo'
import DetailComment from './childComponent/DetailComment'
import DetailGoodsInfo from './childComponent/DetailGoodsInfo'
import DetailRecommend from './childComponent/DetailRecommend'
import DetailBottomBar from './childComponent/DetailBottomBar'
import BetterScroll from 'components/common/betterscroll/BetterScroll'

import {slidesImgUrl, goodsImgUrl, goodsInfo, storeInfo, comment, getRecommendGoods} from 'common/detail';
import {dealImage, debounce} from 'common/utils';
import {getGoodsInfo} from 'network/detail';
import {backTopMixin} from 'common/mixin';
import {mapActions} from 'vuex'

export default {
  name: "Detail",
  mixins: [backTopMixin],
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailComment,
    DetailGoodsInfo,
    DetailRecommend,
    DetailBottomBar,
    BetterScroll
  },
  data() {
    return {
      iid: 0,
      topImg: [],
      goodsImg: [],
      goodsInfo: {},
      storeInfo: {},
      comment: {},
      recommendGoods: [],
      timer: null,
      offsetTop: [0],
      posY: 0,
      contentScroll: null,
      detailImgLoad: null
    }
  },
  created() {
    this.iid = this.$route.params.iid ? this.$route.params.iid : 0;
    this.getGoodsInfo(this.iid);

    this.contentScroll = debounce((position) => {
      this.listenShowBackTop(position)
      this.posY = position.y;
      for (let i = 0, len = this.offsetTop.length; i < len -1; i++) {
        if (this.posY <= -this.offsetTop[i] && this.posY > -this.offsetTop[i + 1])
          {
            this.$refs.dnavbar.currentIndex = i;
          }
      }
    }, 50);

    this.detailImgLoad = debounce(() => {
        this.$refs.scroll.refresh();
        this.offsetTop.push(this.$refs.cmt.$el.offsetTop-44);
        this.offsetTop.push(this.$refs.goodsInfo.$el.offsetTop-44);
        this.offsetTop.push(this.$refs.rec.$el.offsetTop-44);
        this.offsetTop.push(Infinity);
    }, 100);
  },
  methods: {
    //通过mapActions将Action中的方法映射到methods中
    ...mapActions(["addToCart"]),
    getGoodsInfo(iid) {
      //虽然没有请求回来的数据（主要是不知道商品地址），但为了真实性，还是装模做样的将网络请求做好
      getGoodsInfo(iid).then(res => {
        this.topImg = this.getImg(slidesImgUrl);
        this.goodsImg = this.getImg(goodsImgUrl);
        this.goodsInfo = new goodsInfo();
        this.storeInfo = new storeInfo();
        this.comment = new comment();
        this.recommendGoods = getRecommendGoods();
      }, 
      err => console.log('err'));
    },
    getImg(imgUrl) {
      return dealImage(imgUrl);
    },
    scrollClick(index) {
      this.$refs.scroll.scrollTo(0, -this.offsetTop[index], 500);
    },
    addCart() {
      const production = {};
      production["title"] = this.goodsInfo.title;
      production["price"] = this.goodsInfo.newPrice;
      production["image"] = this.goodsInfo.pictures;
      production["iid"] = this.iid;
      this.addToCart(production).then( res => this.$toast.show(res))
    },
    payNow() {
      this.$toast.show("购买成功")
    }
  }
}
</script>
  
<style scoped>
  #detail {
    position: relative;
    z-index: 10;

    height: 100vh;
    overflow: hidden;

    background-color: var(--color-background);
  }
  .content {
    height: calc(100% - 44px - 49px);
  }
</style>