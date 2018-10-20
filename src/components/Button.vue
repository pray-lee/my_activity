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
  width: 5.813333rem /* 218/37.5 */;
  height: 1.493333rem /* 56/37.5 */;
  margin: 0 auto;
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
    width: 5.6rem /* 210/37.5 */;
    height: 1.28rem /* 48/37.5 */;
    background:#000;
    text-align:center;
    line-height: 1.28rem;
    color:#fff;
    font-size: .533333rem /* 20/37.5 */;
  }
  #next-button .btn:after{
    content: '';
    position:absolute;
    top: .213333rem;
    left: .213333rem;
    display:block;
    width:5.6rem;
    height: 1.28rem;
    background:#fff;
    border: 1px solid #000;
    box-sizing: border-box;
    z-index: -1;
  }
</style>
