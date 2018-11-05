<template>
  <Fade>
   <div id="index-page">
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
        }
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
    }
  }
</script>

<style scoped>
#index-page .page-button{
  position: absolute;
  bottom: 1.23rem;
  left: 50%;
  margin-left: -2.906667rem
}
.rule-button{
  left: 0.43rem;
  bottom: 0.43rem;
}
</style>
