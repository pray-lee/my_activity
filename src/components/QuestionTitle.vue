<template>
  <div id="question-title">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'QuestionTitle',
    props: ['title'] 
  }
</script>

<style scoped>
/* question_img_area */
.title{
  width: 6.40rem;
  height: 1.49rem;
  line-height: 1.6rem;
  font-size: 1.07rem;
  color: #000;
  margin: 0 auto;
  margin-top: 0.99rem;
  margin-bottom: .213333rem /* 8/37.5 */;
  white-space: nowrap;
}


</style>
