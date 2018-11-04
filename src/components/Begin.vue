<template>
  <transition leave-active-class="animated fadeOut">
    <div id="begin" v-show="show">
      <img :src="url" alt="" @load="loaded" v-show="imgShow">
    </div>
  </transition>
</template>

<script>
  import gif from '@/assets/images/begin.gif'
  export default {
    name: "Begin",
    data() {
      return {
        show:true,
        imgShow: false,
        url: ''
      }
    },
    methods: {
      loaded() {
        alert('加载完成')
        this.imgShow = true
        this.$nextTick(() => {
          setTimeout(() => {
            this.imgShow = !this.imgShow
            this.show = !this.show
          }, 24000)
        })
      }
    },
    mounted() {
      alert('开始加载')
      this.url = `${gif}?v=${new Date().getTime()}`
    }
  }
</script>

<style scoped>
  #begin {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background:#e7e7e6
  }

  #begin img {
    width: 12.32rem;
    height: 22rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1.16rem;
    right: 0;
    margin: auto;
    object-fit: cover;
  }
</style>
