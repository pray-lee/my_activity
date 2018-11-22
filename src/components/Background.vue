<template>
   <div id="background" ref="background">
   </div>
</template>

<script>
  export default {
    name: "Background",
    props: ['url'],
    mounted() {
      this.$refs.background.style.background= `url(${this.url}) center center no-repeat`
      this.$refs.background.style.backgroundSize = 'cover'
    }
  }
</script>

<style scoped>
#background{
  position:absolute;
  top:0;
  left:0;
  z-index: -99999;
  width: 10rem;
  height: 17.786667rem /* 1334/75 */;
}
</style>
