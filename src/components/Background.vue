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
    }
  }
</script>

<style scoped>
#background{
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  background:url('../assets/images/bg.jpg') center center no-repeat;
  background-size: cover;
  z-index: -9999
}
</style>
