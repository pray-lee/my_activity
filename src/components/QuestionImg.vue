<template>
<Fade>
<div id="question_img">
      <QuestionTitle title="勾选你的性别"></QuestionTitle>
      <div id="question_img_items_container">
        <div class="question_img_item">
          <img src="../assets/images/male.png" alt="">
          <Checkbox checkId="img_radio1" checkFor="img_radio1" checked="checked" name="radio"></Checkbox>
        </div>
        <div class="question_img_item">
          <img src="../assets/images/female.png" alt="">
          <Checkbox checkId="img_radio2" checkFor="img_radio2" name="radio"></Checkbox>
        </div>
        <div class="question_img_item">
          <img src="../assets/images/female.png" alt="">
          <Checkbox checkId="img_radio2" checkFor="img_radio2" name="radio"></Checkbox>
        </div>
        <div class="question_img_item">
          <img src="../assets/images/female.png" alt="">
          <Checkbox checkId="img_radio2" checkFor="img_radio2" name="radio"></Checkbox>
        </div>
        <div class="question_img_item">
          <img src="../assets/images/both.png" alt="" class="both_img">
          <Checkbox checkId="img_radio3" checkFor="img_radio3" name="radio"></Checkbox>
        </div>
      </div>
      <router-link :to="{name: 'wordType', params:{id: 1}}">
        <Button word="下一题" class="button"></Button>
      </router-link>
    </div>
</Fade>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import QuestionTitle from '@/components/QuestionTitle'
import Button from '@/components/Button'
import Fade from '@/components/Fade'
export default {
  name: 'QuestionImg',
  data () {
    return {
      
    }
  },
  components: {
    QuestionTitle,
    Button,
    Checkbox,
    Fade
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#question_img_items_container{
  /*margin-top: 2.053333rem !* 77/37.5 *!;*/
  /*margin-bottom: 3.173333rem !* 119/37.5 *!;*/
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  height: 60vh;
}
.question_img_item{
  margin: 0 .3rem;
  flex: 0 0 auto;
  width: 2.666667rem /* 100/37.5 */;
  height: 3.893333rem /* 146/37.5 */;
}
.question_img_item img{
  display:block;
  width: 2.13rem /* 80/37.5 */;
  height: 2.13rem;
  margin: 0 auto;
  margin-bottom: .8rem /* 30/37.5 */;
}
#question_img .button{
  position: absolute;
  bottom: 1.23rem;
  left: 50%;
  margin-left: -2.906667rem;
}
</style>
