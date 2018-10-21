<template>
  <div id="app">
    <Music :status="musicStatus"></Music>
    <Background></Background>
    <router-view></router-view>
  </div>
</template>

<script>
import Music from '@/components/music'
import Background from '@/components/Background'
export default {
  name: 'App',
  data() {
    return {
      musicStatus: {
        type: false
      }
    }
  },
  components: {
    Music,
    Background
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
#app{
  width: 10rem;
}
</style>
