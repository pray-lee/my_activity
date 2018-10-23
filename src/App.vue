<template>
  <div id="app" v-if="gameData!=null">
    <Music :status="musicStatus"></Music>
    <Background :url="gameData.bgImg"></Background>
    <router-view></router-view>
  </div>
</template>

<script>
  import Music from '@/components/music'
  import Background from '@/components/Background'
  import QuestionWrapper from "@/components/QuestionWrapper";
  import startGame from '@/api/startGame'
  import Listener from '@/common/eventBus'

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
    },
    components: {
      QuestionWrapper,
      Music,
      Background
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
      }
    }
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
