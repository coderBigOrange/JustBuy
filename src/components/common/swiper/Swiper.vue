<template>
  <div id="hy-swiper">
    <!-- 幻灯片图片 -->
    <div class="swiper" 
          @touchstart="touchStart" 
          @touchmove="touchMove" 
          @touchend="touchEnd">
      <slot></slot>
    </div>
    <!-- 底部小圆点 -->
    <div class="indicator">
      <div v-for="(item,index) in slideCount"  
            class="indi-item" 
            :class="{active: index === currentIndex-1}" 
            :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      animDuration: {
        type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      },
      dataGetted: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        slideCount: 0,//幻灯片图片个数
        totalWidth: 0,//窗户宽度（把可视部分视为窗户,透过窗户只能看到一张图片）
        swiperStyle: {},
        currentIndex: 1,
        scrolling: false,
      }
    },
    mounted(){
      //如果挂载时，图片已经获取到，就调用handleDome，开始计时
      //通过setTimeout让出当前任务线程，确保swiperItem部署完毕
      if(this.dataGetted) {
        setTimeout(() => {
          this.handleDom();
          this.startTimer();
        }, 0)
      } else {
        //增加鲁棒性，如果并未给swiper组件传入dataGetted,即dataGetted为默认值false
        //那么3s后将其改为true,手动触发wacth
        setTimeout(() => {
          this.dataGetted = true
        },3000)
      }
    },
    watch: {
      //如果挂载时没有获取到图片,使用Watch继续监听幻灯片图片的获取情况，一旦获取到便调用handleDom,
      //这样可以第一时间开始执行幻灯片，同时还能避免报错 can not read property 'getElementsByClassName' of null
        dataGetted() {
          setTimeout(() => {
            this.handleDom();
            this.startTimer();
        },0)
      }
    },
    methods: {
      startTimer: function() {
        this.playTimer = window.setInterval(() => {

          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);

        },this.interval)
      },
      //停止定时器
      stopTimer: function() {
        window.clearInterval(this.playTimer);
      },
      //滚动一张图片，再判断是否到达末尾，回调transitonEnd？
      scrollContent: function(nextPosition) {
        this.scrolling = true;
        //transition设置过渡,有四个参数,属性名，持续时间，速度曲线，延迟时间
        this.swiperStyle.transition = 'transform '+ this.animDuration + 'ms';
        //切换，其实就是变换offset-left值
        this.setTransform(nextPosition);

        this.checkPositon();

        this.scrolling = false;
      },

      checkPositon: function() {
        window.setTimeout(() => {
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }
        },this.animDuration)
      },
      //设置transform以达到滚动效果,translate3d是一个函数,三个参数x,y,z
      setTransform: function(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },
      //第一张图片之前加上最后一张图片，最后一张图之后加上原来的第一张图片
      handleDom: function() {
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');

        this.slideCount = slidesEls.length;

        if (this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true);
          let clonelast = slidesEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(clonelast,slidesEls[0]);
          swiperEl.appendChild(cloneFirst);
          this.totalWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
        }

        this.setTransform(-this.totalWidth);
      },

      //touchStart 拖动开始事件
      touchStart: function(e) {
        //滚动时不允许拖动
        if (this.scrolling)return;

        this.stopTimer();
      //保存拖动时点击的页面的位置
        this.startX = e.touches[0].pageX;
      },
      //拖动事件
      touchMove: function (e) {
        this.currentX = e.touches[0].pageX;
        //计算拖动的距离
        this.distance = this.currentX - this.startX;
        //当前幻灯片偏移量
        let currentPosition = -this.currentIndex * this.totalWidth;
        //目的位置偏移量
        let moveDistance = this.distance + currentPosition;
        //移动到目的偏移量
        this.setTransform(moveDistance)
      },
      //拖动结束事件
      touchEnd: function (e) {
        //distance确定拖动方向,正右负左,
        let currentMove = Math.abs(this.distance);
        //this.totalWidth * this.moveRatio是定义的拖动比例。少于这个比例返回原处
        if (this.distance === 0) {
          return;
        }else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
          this.currentIndex--;
        }else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
          this.currentIndex++;
        }
        //移动
        this.scrollContent(-this.currentIndex * this.totalWidth);
        //激活定时器
        this.startTimer();
      }
    }
   }
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;

    justify-content: center;

    position: absolute;
    bottom: 8px;

    width: 100%;
  }

  .indi-item {
    box-sizing: border-box;

    margin: 0 3px;

    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: rgba(255, 255, 255, .5);

    text-align: center;
    line-height: 8px;
    font-size: 12px;

  }

  .indi-item.active {
    background-color: rgba(212,62,46,1);
  }
</style>>
