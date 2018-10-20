<template>
  <div id="music"></div>
</template>

<script>
  export default {
    name: "music"
  }
</script>

<style scoped>
  #music{
    z-index:999;
    position: fixed !important;
    right: .426667rem /* 16/37.5 */;
    top: .426667rem /* 32/75 */;
    width: 1.333333rem /* 100/75 */;
    height: 1.333333rem;
    font-size:0;
    background:url(../assets/images/music_icon.png) center center no-repeat;
    background-size:cover;
  }
</style>
