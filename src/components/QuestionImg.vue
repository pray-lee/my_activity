<template>
  <Fade>
    <div id="question_img">
      <QuestionTitle :nameZh="title" nameType=0 nameBg="" class="question-title"></QuestionTitle>
      <div id="question_img_items_container">
        <div class="question_img_item" v-for="(item, index) in options.options" :key="index">
          <Checkbox v-if="index==0" :checked="'checked'" :value="item.okey" :name="qkey"
                    @change="receiveValue"></Checkbox>
          <Checkbox v-else :value="item.okey" :name="qkey" @change="receiveValue"></Checkbox>
          <img :src="item.oimg" alt="">
        </div>
      </div>
      <!-- <ChangeQuestion v-show="isChangeOver" :qkey="qkey" @changeItem="receiveQuestion"></ChangeQuestion> -->
    </div>
  </Fade>
</template>

<script>
  import Checkbox from '@/components/Checkbox'
  import QuestionTitle from '@/components/QuestionTitle'
  import Fade from '@/components/Fade'
  import ChangeQuestion from '@/components/ChangeQuestion'

  export default {
    name: 'QuestionImg',
    props: ['title', 'options', 'qkey', 'isChangeOver'],
    components: {
      QuestionTitle,
      Checkbox,
      Fade,
      ChangeQuestion
    },
    methods: {
      receiveValue(val) {
        this.$emit('change', val)
      },
     receiveQuestion(question) {
        this.options.options = question.options
     }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#question_img_items_container{
  display: flex;
  justify-content:center;
  align-content: center
}
  .question-title{
    padding-top: 3.546667rem /* 266/75 */;
    padding-bottom: 1.533333rem /* 115/75 */;
  }
  .question-title >>> .title{
    font-size: .4444rem /* 33.33/75 */;
  }
  .question_img_item {
    flex: 0 0 auto;
    width: 1.466667rem /* 110/75 */;
    height: 1.466667rem /* 110/75 */;
    position:relative;
    margin: 0 1.04rem /* 48/75 */
  }
  .question_img_item >>> label{
    display:block;
    width: 1.466667rem /* 110/75 */;
    height: 1.466667rem /* 110/75 */;
  }
  .question_img_item >>> label::after{
    top: -.8rem;
    left: .7rem;
  }
  .question_img_item img {
    display: block;
    width: 1.466667rem /* 110/75 */;
    height: 1.466667rem /* 110/75 */;
    margin: 0 auto;
  }
</style>
