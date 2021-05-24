<template>
  <div class="toast" v-show="isShow">
    <p>{{message}}</p>
  </div>
</template>
  
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message, time = 1000) {
      this.message = message
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false
      },time)
    }
  }
}
</script>
  
<style scoped>
  .toast p {
    position: fixed;

    top: 50%;
    left: 50%;
    padding: 8px 10px;

    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(1,1,1,.5);
    z-index: 999;
  }
</style>