<template>
  <div class="cart_list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :cart-list-item="item" :index="index"></cart-list-item>
  </div>
</template>
  
<script>
import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList']),
  }
}
</script>
  
<style scoped>

</style>