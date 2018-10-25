<template>
  <Fade>
    <div id="question_img">
      <QuestionTitle :nameZh="title" nameType=0 nameBg="" class="question-title"></QuestionTitle>
      <div id="question_img_items_container">
        <div class="question_img_item" v-for="(item, index) in options.options">
          <img :src="item.oimg" alt="">
          <Checkbox v-if="index==0" :checked="'checked'" :value="item.okey" :name="qkey"
                    @change="receiveValue"></Checkbox>
          <Checkbox v-else :value="item.okey" :name="qkey" @change="receiveValue"></Checkbox>
        </div>
      </div>
      <ChangeQuestion v-show="isChangeOver" :qkey="qkey" @changeItem="receiveQuestion"></ChangeQuestion>
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
  #question_img{
    display: flex;
    flex-direction: column;
    height: 80vh
  }
  #question_img_items_container {
    display: flex;
    flex:1 1 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .question-title{
    flex: 0 0 auto;
    margin-right: 1.20rem;
  }
  .question-title >>> .title{
    font-size: 0.64rem;
    font-weight: bold;
    width: 6.5rem;
    line-height: 1rem;
    text-align:left;
  }
  .question_img_item {
    margin: 0 .3rem;
    flex: 0 0 auto;
    width: 2.666667rem /* 100/37.5 */;
    height: 3.893333rem /* 146/37.5 */;
  }

  .question_img_item img {
    display: block;
    width: 2.13rem /* 80/37.5 */;
    height: 2.13rem;
    margin: 0 auto;
    margin-bottom: .8rem /* 30/37.5 */;
  }
</style>
