<template>
  <Fade>
    <div id="question-word">
      <QuestionTitle :nameZh="title" nameType=0 nameBg=""></QuestionTitle>
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
  .question-area {
    display: flex;
    width: 7.893333rem /* 296/37.5 */;
    height: 58vh;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
</style>
