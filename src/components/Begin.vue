<template>
  <transition leave-active-class="animated fadeOut">
    <div id="begin" v-show="show" :style="styleObject"></div>
  </transition>
</template>

<script>
  import gif from '@/assets/images/begin.gif'
  export default {
    name: "Begin",
    data() {
      return {
        show: true,
        styleObject: {
          background: `url(${gif}?v=${new Date().getTime()}) center center no-repeat`,
          backgroundSize: 'cover'
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.show = !this.show
      }, 24000)
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
}
</style>
