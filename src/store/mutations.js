import {ADD_COUNTER, ADD_TO_CART, CHAN_LIST, CHAN_STATUS} from './mutations_types';
export default {
  [ADD_COUNTER] (state, {index, num}) {
    state.cartList[index].count += num;
  },
  [ADD_TO_CART] (state, payLoad) {
    payLoad.selected = true;
    payLoad.count = 1;
    state.cartList.push(payLoad);
  },
  [CHAN_LIST] (state, index) {
    state.cartList.splice(index, 1)
  },
  [CHAN_STATUS] (state, index) {
    state.cartList[index].selected = !state.cartList[index].selected;
  }
}
