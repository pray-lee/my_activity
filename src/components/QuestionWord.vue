<template>
  <Fade>
   <div id="question-word">
     <QuestionTitle title="我的艺术态度"></QuestionTitle>
     <div class="question-area">
        <question checked="checked" checkId="one" checkFor="one" name="radio1"></question>
        <question checkId="two" checkFor="two" name="radio1"></question>
        <question checkId="three" checkFor="three" name="radio1"></question>
     </div>
     <!--<Button word="下一题" class="button" @click.native="changeRoute"></Button>-->
   </div>
  </Fade>
</template>

<script>
  import QuestionTitle from '@/components/QuestionTitle';
  import Question from '@/components/Question';
  // import Button from '@/components/Button'
  import Fade from '@/components/Fade'
  // import Listener from '@/common/eventBus'
  export default {
    name: "QuestionWord",
    props: ['param'],
    components: {
      // Button,
      QuestionTitle,
      Question,
      Fade
    },
    // methods: {
    //   changeRoute() {
    //     // this.$router.push({name: 'imgType', params: {id:2}})
    //     Listener.$emit('receiveId', this.param.id)
    //   }
    // }
  }
</script>

<style scoped>
.question-area{
  display:flex;
  width: 7.893333rem /* 296/37.5 */;
  height: 60vh;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  /*margin-top:.8rem !* 30/37.5 *!;*/
  /*margin-bottom:.8rem !* 30/37.5 *!;*/
}
#question-word .button{
  position: absolute;
  bottom: 1.23rem;
  left: 50%;
  margin-left: -2.906667rem;
}
</style>
