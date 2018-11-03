<template>
  <div id="question-title">
    <div class="title" v-if="nameType==0" v-html="nameZh"></div>
    <div class="title-img" v-else>
      <img :src="nameBg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuestionTitle',
    props: ['nameBg', 'nameZh','nameType']
  }
</script>

<style scoped>
/* question_img_area */
.title{
  width: 9rem;
  line-height: 1.6rem;
  font-size: 1.07rem;
  color: #333;
  margin: 0 auto;
  margin-top: 0.99rem;
  margin-bottom: 0.79rem /* 8/37.5 */;
  white-space: normal;
  text-align:center;
  word-break:break-all
}
.title-img{
  width:10rem;
  height: 10rem;
  margin-top:.99rem;
  position:relative;
}
.title-img img{
  position:absolute;
  width: 10rem;
  height:10rem;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto
}

</style>
