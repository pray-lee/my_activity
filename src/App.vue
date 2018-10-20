<template>
  <div id="app">
    <Music></Music>
    <Background></Background>
    <router-view/>
  </div>
</template>

<script>
import Music from '@/components/music'
import Background from '@/components/Background'
export default {
  name: 'App',
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
