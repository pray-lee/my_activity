<template>
  <div id="poster">
    <img ref="base64Img">
    <div id="canvas-wrapper" v-if="!!dataURL">
      <img :src="dataURL" alt="" id="canvas">
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
      // 转base64
      this._initPosterImg(result.data.bgImg)
      //截图
      //this._toImage()
    },
    _initPosterImg (src) {
      console.log(src)
      src="http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLBHE2R79RQfsNu6vCekrAETiaw7uo4NZCerCjzorDgwJ6lHn84Alg8Xicqu9fJhq2iaZUx7sUE0arhug/132"
      var image = new Image();
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = src
      image.onload = () => {
        console.log(11111111)
        console.log(this.$refs.base64Img)
        var base64 = this._getBase64Image(image);
        this.$refs.base64Img.src = base64
      }
    },
    _getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
      var dataURL = canvas.toDataURL("image/jpeg");
      return dataURL;
    },
    _toImage() {
      html2canvas(document.getElementById('poster'),{
        background: null,
      }).then((canvas) => {
        let dataURL = canvas.toDataURL("image/png");
        this.dataURL = dataURL;
      });
    },
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
