<template>
  <transition leave-active-class="animated fadeOut">
    <div id="begin" v-show="show">
      <div id="loading" v-show="!isLoaded"></div>
      <img :src="url" alt="" @load="loaded" v-show="imgShow" ref="beginImg">
    </div>
  </transition>
</template>

<script>
  import gif from '@/assets/images/begin.gif'
  export default {
    name: "Begin",
    data() {
      return {
        show: true, //显示begin组件
        imgShow: false, //是否显示图片
        isLoaded: false,
        url: ''
      }
    },
    methods: {
      loaded() {
        this.imgShow = true
        this.isLoaded = true
        this.$nextTick(() => {
          setTimeout(() => {
            this.imgShow = !this.imgShow
            this.show = !this.show
          }, 24000)
        })
      },
    },
    mounted() {
      this.isLoaded = false
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
    background-color: #e7e7e6;
  }

  #loading {
    position: fixed;
    z-index: 100000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background: url(../assets/images/loading.gif) center center no-repeat;
    background-size: cover
  }

  #begin img {
    display: block;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover
  }
</style>
