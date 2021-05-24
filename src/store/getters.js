export default {
  cartListLength (state) {
    return state.cartList.length;
  },

  cartList(state) {
    return state.cartList
  }
}
// 通过getter属性访问mutations的状态
//挖掘 mapGetters 可以将getter中的函数映射到计算属性