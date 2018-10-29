<template>
  <div id="poster">
    <img v-if="result&&result.bgImg" :src="result.bgImg" alt="" class="img-bg" ref="originImg">
    <div id="canvas-wrapper" v-if="!!dataURL">
      <img :src="dataURL" alt="" id="canvas" crossorigin="anonymous">
    </div>
    <div class="title clearfix">
      <div class="head-img">
        <img v-if="!!userHeadImg" :src="userHeadImg" alt="">
      </div>
      <div class="title-word" v-html="titleWord"></div>
    </div>
    <div class="poster-word" v-if="result&&result.pdesc" v-html="result.pdesc">
    </div>
    <div class="qrcode">
      <img v-if="!!qrcodeUrl" :src="qrcodeUrl" alt="">
    </div>
  </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  import Listener from '@/common/eventBus'
  import submitQuestion from '@/api/submitQuestion'
  export default {
    name: "poster",
    data() {
      return {
        dataURL: '',
        result: {},
        titleWord: Listener.gameData.nameZh,
        qrcodeUrl: Listener.qrcodeUrl,
      }
    },
    props: ['userHeadImg'],
    mounted() {
      console.log('%c poster mounted', 'font-weight:bold;color:#ff5252;font-size: 18px')
      //获取海报数据
      this._submit(Listener.postData)
    },
    methods: {
      async _submit(options) {
        //获取海报数据
        let result = await submitQuestion.getPoster(options)
        this.result = await result.data;
        //截图
        this._toImage()
      },
      _toImage() {
        html2canvas(document.getElementById('poster'),{
          background: null,
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
          this.dataURL = dataURL;
          if(this.$refs.originImg)
            this.$refs.originImg.style.display="none"
        });
      },
      toBase64() {

      }
    }
  }
</script>

<style scoped>
#poster #canvas{
    position:absolute;
    width: 6.40rem;
    height: 11.36rem;
    z-index:999;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
  }
  #canvas-wrapper{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin: auto;
    background:#e7e7e6
  }
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  #poster {
    width: 6.40rem;
    height: 11.36rem;
    position:relative;
    z-index:1;
    top:0;
    left:0;
    bottom:0;
    right: 0;
    margin: auto;
    margin-bottom: .8rem;
  }
  #poster .img-bg{
    position:absolute;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
    margin: auto;
    width: 6.4rem;
    height: 11.36rem;
    background:#ccc
  }
  .title {
    height: 1.15rem;
    padding-top: 0.25rem;
    padding-bottom: 0.13rem;
    margin-bottom: 0.24rem;
  }

  .head-img, .title-word {
    float: left
  }

  .head-img {
    width: 0.77rem;
    height: .77rem;
    border-radius: 50%;
    background: #ccc;
    margin-left: 0.71rem;
    overflow: hidden
  }
  .head-img img{
    width:100%;
    height:100%;
  }
  .title-word {
    font-size: 0.3rem;
    font-weight: 600;
    color: #494949;
    line-height: .77rem;
    margin-left: 0.20rem;
  }
  #poster .poster-word{
    transform-origin: left;
    transform: scale(.6);
    position: absolute;
    z-index:1;
    top:8.8rem;
    left: 1rem;
    width: 7.81rem;
    height: 1.59rem;
    margin: 0 auto;
    text-align:center;
    color:#494949;
    font-size: 0.10rem;
    word-break: break-all;
  }
  .qrcode{
    position:absolute;
    z-index:2;
    top: 10.09rem;
    right: 0.57rem;
    width: 0.96rem;
    height: 0.96rem;
  }
  .qrcode img{
    width: 100%;
    height: 100%;
  }
</style>
