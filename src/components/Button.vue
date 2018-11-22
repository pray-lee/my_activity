<template>
  <div id="next-button">
    <button class="btn">{{word}}</button>
  </div>
</template>

<script>
  export default {
    props: ['word'],
    name: "Button"
  }
</script>

<style scoped>
#next-button{
  width: 3.133333rem /* 235/75 */;
  height: .706667rem /* 53/75 */;
  margin: 0 auto;
  background:#0a0000
}
  #next-button button{
    position:relative;
    margin:0;
    padding:0;
    outline: none;
    display:block;
    -webkit-appearance: none;
    border: 1px solid transparent;
    box-sizing: border-box;
    width: 3.133333rem;
    height: .706667rem;
    background:#0a0000;
    text-align:center;
    line-height: .706667rem;
    color:#fff;
    font-size: .2592rem /* 19.44/75 */;
  }
</style>
