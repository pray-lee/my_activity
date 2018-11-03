<template>
  <Fade>
    <div id="question-word">
      <QuestionTitle :nameZh="title" nameType=0 nameBg="" class="question-title"></QuestionTitle>
      <div class="question-area">
        <template v-for="(item,index) in options.options">
          <question v-if="index==0" :checked="'checked'" :value="item.okey" :name="qkey" :content="item.ocontent"
                    @change="receiveValue"></question>
          <question v-else :value="item.okey" :name="qkey" :content="item.ocontent" @change="receiveValue"></question>
        </template>
      </div>
      <ChangeQuestion v-show="isChangeOver" :qkey="qkey" @changeItem="receiveQuestion"></ChangeQuestion>
    </div>
  </Fade>
</template>

<script>
  import QuestionTitle from '@/components/QuestionTitle';
  import Question from '@/components/Question';
  import Fade from '@/components/Fade'
  import ChangeQuestion from '@/components/ChangeQuestion'

  export default {
    name: "QuestionWord",
    props: ['title', 'options', 'qkey', 'isChangeOver'],
    components: {
      QuestionTitle,
      Question,
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

<style scoped>
  #question-word{
    display:flex;
    flex-direction: column;
    height: 75vh;
  }
  .question-area {
    flex: 1 1 auto;
    display: flex;
    width: 7.893333rem /* 296/37.5 */;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
  .question-title{
    padding-top: 2rem;
    flex: 0 0 auto;

  }
  .question-title >>> .title{
    font-size: 0.5rem;
    font-weight: bold;
    width: 7.893333rem;
    line-height: 0.8rem;
    text-align:left;
  }
</style>
