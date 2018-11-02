<template>
  <div id="app" v-if="gameData!=null">
    <Music :status="musicStatus" :src="gameData.bgMusic"></Music>
    <Background :url="gameData.bgImg"></Background>
    <Begin></Begin>
    <router-view></router-view>
    <lg-preview></lg-preview>
  </div>
</template>

<script>
  import Music from '@/components/music'
  import Background from '@/components/Background'
  import Begin from '@/components/Begin'
  import QuestionWrapper from "@/components/QuestionWrapper";
  import startGame from '@/api/startGame'
  import config from '@/api/config'
  import Listener from '@/common/eventBus'
  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        gameData: null,
        musicStatus: {
          type: 0
        }
      }
    },
    created() {
      this._getGameData()
      Listener.actid = this._getQueryString('actid')
    },
    components: {
      QuestionWrapper,
      Music,
      Background,
      Begin
    },
    methods: {
      async _getGameData() {
        let data = await startGame.getData()
        this.gameData = data.data
        //交给总线,方便别的页面访问
        Listener.gameData = data.data
        //音乐状态
        this.musicStatus.type = !!this.gameData.isPlayOnOpen
        //设置document标题
        this._setDocumentTitle(this.gameData)
      },
      _setDocumentTitle(gameData) {
        document.getElementsByTagName('title')[0].innerHTML = gameData.title
      },
      //获取地址里的二维码地址
      _getQueryString(name){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i'); // 匹配目标参数
        let result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
        if (result != null) {
          return decodeURIComponent(result[2]);
        } else {
          return null;
        }
      }
    },
  }
</script>

<style>
  #app {
    font-family: own, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #app {
    width: 10rem;
  }
</style>
