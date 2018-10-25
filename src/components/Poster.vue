<template>
  <div id="poster">
    <img v-if="result&&result.bgImg" :src="result.bgImg" alt="" class="img-bg" ref="originImg">
    <img v-if="!!dataURL" :src="dataURL" alt="" id="canvas">
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
        this.result = result.data;
        //截图
        this._toImage()
      },
      _toImage() {
        html2canvas(document.getElementById('poster'),{
          backgroundColor: null,
          logging: false,
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
          this.dataURL = dataURL;
          if(this.$refs.originImg)
            this.$refs.originImg.style.display="none"
        });
      },
    }
  }
</script>

<style scoped>
#poster #canvas{
    position:absolute;
    width:10.00rem;
    height: 17.77rem;
    z-index:999;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
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
    width: 10rem;
    height: 17.77rem;
    position:relative;
    z-index:1;
    padding: 0 1.09rem;
    padding-top: 0.37rem;

  }
  #poster .img-bg{
    position:absolute;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
    margin: auto;
    width: 10.00rem;
    height: 17.77rem;
    background:#ccc
  }
  .title {
    height: 1.15rem;
    margin-bottom: 0.24rem;
  }

  .head-img, .title-word {
    float: left
  }

  .head-img {
    width: 1.15rem;
    height: 1.15rem;
    border-radius: 50%;
    background: #ccc
  }

  .title-word {
    font-size: 0.48rem;
    font-weight: 600;
    color: #494949;
    line-height: 1.15rem;
    margin-left: 0.32rem;
  }
  #poster .poster-word{
    position: absolute;
    z-index:1;
    top:14.24rem;
    left: 1.37rem;
    width: 7.76rem;
    height: 1.25rem;
    margin: 0 auto;
    text-align:center;
    color:#494949;
    font-size: 0.28rem;
    word-break: break-all;
  }
  .qrcode{
    position:absolute;
    z-index:2;
    top: 15.95rem;
    right: 1.15rem;
    width: 1.47rem;
    height: 1.47rem;
  }
  .qrcode img{
    width: 100%;
    height: 100%;
  }
</style>
