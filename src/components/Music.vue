<template>
  <div class="music-wrapper">
    <div id="music" @click="changeStatus" :class="{active: isActive,musicStart: isActive}" ref="musicIcon"></div>
    <audio class="song" ref="audio" v-if="status!=null">
      <source :src="src">
    </audio>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  export default {
    name: "music",
    props: ['status', 'src'],
    computed: {
      isActive() {
        return this.status.type
      }
    },
    mounted() {
      let _this = this;
      this.audioStatus()
      //处理ios端微信自动播放问题
      wx.config({
        debug:false,
        appId:"",
        timestamp:1,
        nonceStr:"",
        signature:"",
        jsApiList:[]
      });
      wx.ready(function(){
        _this.audioStatus()
      })
    },
    methods: {
      changeStatus() {
        this.status.type = !this.status.type
        this.audioStatus()
      },
      audioStatus() {
        this.$refs.audio.loop = 'loop'
        if(this.status.type){
          this.$refs.audio.play()
        }else{
          this.$refs.audio.pause()
        }
      }
    }
  }
</script>

<style scoped>
  #music {
    z-index: 999;
    position: fixed !important;
    right: .426667rem /* 16/37.5 */;
    top: .426667rem /* 32/75 */;
    width: 1.333333rem /* 100/75 */;
    height: 1.333333rem;
    font-size: 0;
    background: url(../assets/images/closemusic_icon.png) center center no-repeat;
    background-size: cover;
  }
  .musicStart{
    animation: 3s linear infinite rotate;
  }
  #music.active {
    width: 1.333333rem;
    height: 1.333333rem;
    background: url(../assets/images/music_icon.png) center center no-repeat;
    background-size: cover
  }

  .song {
    /*visibility: hidden;*/
    position:absolute;
    z-index:999999;
    background:#ff5252
  }
  @keyframes rotate {
    from{
      transform: rotate(0deg)
    }
    to{
      transform: rotate(360deg)
    }
  }
</style>
