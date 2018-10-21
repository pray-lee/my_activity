<template>
  <Fade>
   <div id="index-page">
     <QuestionTitle title="设计世界的你"></QuestionTitle>
     <RuleButton :displayObj="showOrHide" class="rule-button"></RuleButton>
     <router-link :to="{name: 'imgType', params: {id:1}}">
       <Button word="开启我的平行世界" class="page-button"></Button>
     </router-link>
   </div>
  </Fade>
</template>

<script>
  import QuestionTitle from "@/components/QuestionTitle";
  import Button from "@/components/Button";
  import RuleButton from "@/components/RuleButton";
  import Fade from "@/components/Fade";
  export default {
    name: "IndexPage",
    data() {
      return {
        showOrHide: {
          show: false
        }
      }
    },
    components: {
      QuestionTitle,
      Button,
      RuleButton,
      Fade
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
