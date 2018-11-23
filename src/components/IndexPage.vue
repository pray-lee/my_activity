<template>
  <Fade>
   <div id="index-page" ref="indexBg">
     <QuestionTitle v-if="gameData!=null" :nameType="gameData.nameType" :nameBg="gameData.nameBg" :nameZh="gameData.nameZh"></QuestionTitle>
     <RuleButton :displayObj="ruleStatus" class="rule-button"></RuleButton>
     <router-link to="/question" v-if="gameData!=null">
       <Button :word="gameData.startBtnName" class="page-button"></Button>
     </router-link>
   </div>
  </Fade>
</template>
<script>
  import QuestionTitle from "@/components/QuestionTitle";
  import Button from "@/components/Button";
  import RuleButton from "@/components/RuleButton";
  import Fade from "@/components/Fade";
  import Listener from '@/common/eventBus'
  export default {
    name: "IndexPage",
    data() {
      return {
        ruleStatus: {
          show: Listener.gameData.isShowRulesOnOpen
        },
        bgurl: Listener.gameData.bgImg
      }
    },
    components: {
      QuestionTitle,
      Button,
      RuleButton,
      Fade
    },
    computed: {
      gameData() {
        return Listener.gameData
      }
    },
    mounted () {
      this.$refs.indexBg.style.background= `url(${this.bgurl}) center -1.86rem no-repeat`
      this.$refs.indexBg.style.backgroundSize = '10rem 17.786667rem'
    }
  }
</script>

<style scoped>
#index-page{
  width: 10rem;
  height: 100vh /* 1206/75 */;
  position:relative;
}
#index-page .page-button{
  position: absolute;
  bottom: 0.453333rem /* 34/75 */;
  left: 50%;
  margin-left: -1.566665rem
}
.rule-button{
  left: 0.43rem;
  bottom: 0.43rem;
}
</style>
