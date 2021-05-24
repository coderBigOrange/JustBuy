import {ADD_COUNTER, ADD_TO_CART, CHAN_LIST, CHAN_STATUS} from "./mutations_types"

export default {
  addToCart(contex, production) {
    return new Promise((resolve, reject)=> {
      let exsist = false;
      contex.state.cartList.forEach((pro, index) => {
        if(pro.iid === production.iid) {
          contex.dispatch('changeNum',{index})
          exsist = true;
          resolve("商品数量加1")
        }
      });
      if(!exsist) {
        contex.commit(ADD_TO_CART, production)
        resolve("加入购物车成功")
      }
    })
  },
  Pay(contex) {
    return new Promise((resolve, reject) => {
      let payIndex = [];
      contex.state.cartList.forEach((item, index) => {
        if (item.selected) {
          payIndex.push(index)
        }
      });
      //倒序删除商品
      let len = payIndex.length - 1;
      while (len >= 0) {
        contex.commit(CHAN_LIST, payIndex[len]);
        len--;
      }
      resolve("购买成功")
    })
  },
  changeSlec(contex, index) {
    contex.commit(CHAN_STATUS, index)
  },
  changeNum(contex, {index, num = 1}) {
    contex.commit(ADD_COUNTER, {index, num})
  }
}
//挖掘 mapActions 通过mapActions将Action中的方法映射到methods中