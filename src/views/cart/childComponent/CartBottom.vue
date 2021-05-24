<template>
  <div class="cart_bottom">
    <i class="icon_selcet" :class="{active: isAllSelc}" @click="allSlecClick"><span>全选</span></i>
    <div class="total">
      <div class="total_price"><span>总计：</span><span>￥{{totalPrice.toFixed(2)}}</span></div>
      <div class="pay_btn" :class="{empty: !selectedNum}" @click="payClick">去结算({{selectedNum}})</div>
    </div>
  </div>
</template>
  
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "CartBottom",
  methods: {
    ...mapActions(['Pay','changeSlec']),
    allSlecClick() {
      this.cartList.forEach((item, index)=> {
        if (item.selected === this.allSelected) {
          this.changeSlec(index)
        }
      })
    },
    payClick() {
      if (this.selectedNum) {
        this.Pay().then(res => this.$toast.show(res));
      }
    }
  },
  data() {
    return {
      totalPrice: 0,
      allSelected: false
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    selectedNum() {
      this.totalPrice = 0
      let count = 0;
      this.cartList.forEach(item => {
        if (item.selected) {
          count++;
          this.totalPrice += item.price * item.count;
        }
      });
      return count;
    },
    isAllSelc() {
      this.allSelected = this.cartList.length && !this.cartList.filter(item => {
        return !item.selected
      }).length;
      return this.allSelected;
    }
  }
}
</script>
  
<style scoped>
  .cart_bottom {
    display: flex;
    position: relative;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 12px;
    box-shadow: 0 -1px 1px #f2f2f2;
    background-color: white;
  }
  .icon_selcet {
    display: inline-block;
    widows: 78px;
    padding-left: 30px;

    font-style: normal;
    background: url('~assets/image/cart/unselect.png') 0 center/30px no-repeat;
  }
  .active {
    background: url('~assets/image/cart/select.png') 0 center/30px no-repeat;
  }
  .total {
    flex: 3;
    display: flex;
    text-align: center;
  }
  .total_price {
    flex: 2;
    padding-right: 20px;
    color: black;
    font-size: 14px;
    text-align: right;
  }
  .total_price :last-child {
    /* color: red; */
    font-weight: bold;
  }
  .pay_btn {
    flex: 1;
    margin: 6px 4px 0 0;
    height: 30px;
    background-color: #f2140c;
    border-radius: 15px;
    line-height: 30px;
    color: white;
    font-weight: bold;
  }
  .empty {
    background-color: rgba(228, 6, 6, 0.5);
  }
</style>