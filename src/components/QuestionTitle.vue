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
  max-width: 6.666667rem /* 500/75 */;
  font-size: .44rem /* 33/75 */;
  color: #333;
  margin: 0 auto;
  white-space: normal;
  text-align:center;
  word-break:break-all;
  letter-spacing: .05rem
}
.title-img{
  width:10rem;
  height: 10rem;
  padding-top:.99rem;
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
