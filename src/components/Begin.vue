<template>
  <transition leave-active-class="animated fadeOut">
    <div id="begin" v-show="show"></div>
  </transition>
</template>

<script>
  export default {
    name: "Begin",
    data() {
      return {
        show: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.show = !this.show
      }, 16000)
    }
  }
</script>

<style scoped>
#begin{
  position:fixed;
  z-index: 99999;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin: auto;
  background: url('../assets/images/begin.gif') center center no-repeat;
  background-size: cover
}
</style>
