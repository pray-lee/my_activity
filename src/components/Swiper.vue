<template>
  <div id="swiper-wrapper">
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
      <swiper-slide>
        <!--<div id="tag">市价：<span>600</span></div>-->
        <img src="../assets/images/1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <!--<div id="tag">市价：<span>600</span></div>-->
        <img src="../assets/images/2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <!--<div id="tag">市价：<span>600</span></div>-->
        <img src="../assets/images/3.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <!--<div id="tag">市价：<span>600</span></div>-->
        <img src="../assets/images/4.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "Swiper",
    data() {
      return {
        swiperOption: {
          'pagination': {
            'el': '.swiper-pagination'
          },
          autoplay: {
            delay: 3000
          },
          loop: true,
          effect: 'slide',
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(1, 3000, false)
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
#swiper-wrapper{
  position:relative;
  width: 9.15rem;
  height: 5.15rem;
  margin:0 auto;
}
#swiper-wrapper #tag{
  position: absolute;
  right: 0.11rem;
  top:0;
  width:2.45rem;
  height: 0.64rem;
  color:#fff;
  font-size: 0.37rem;
  line-height:.64rem;
  text-align:right;
  background: url(../assets/images/tag.png) center center no-repeat;
  background-size: 2.45rem .64rem;
  padding:0 .2rem;
}
#swiper-wrapper img{
  width: 9.15rem;
  height: 5.15rem;
}
.swiper-container{
  width: 100%;
  height: 100%;
}
.my-swiper >>> .swiper-pagination-bullet-active{
  background:#000;
  opacity: .8
}
</style>
