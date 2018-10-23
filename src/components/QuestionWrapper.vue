<template>
  <Fade>
    <div id="question-wrapper" v-if="gameData!=null">
      <template v-for="(item, index) of gameData.questions">
        <transition enter-active-class="animated fadeIn">
          <QuestionImg v-if="item.qtype===1" :title="item.qcontent" :qOptions="item.options" ref="ele" v-show="statusArr[index]" :key="item.qKey"></QuestionImg>
          <QuestionWord v-if="item.qtype===0" :title="item.qcontent" :qOptions="item.options" ref="ele" v-show="statusArr[index]" :key="item.qKey"></QuestionWord>
        </transition>
      </template>
      <Button word="下一题" @click.native="changeView" class="button"></Button>
      <router-view name="QuestionWrapper"></router-view>
    </div>
  </Fade>
</template>

<script>
  import QuestionImg from "./QuestionImg";
  import QuestionWord from "./QuestionWord";
  import Listener from "@/common/eventBus";
  import Button from "@/components/Button";
  import Fade from "@/components/Fade";

  export default {
    name: "QuestionWrapper",
    components: {QuestionWord, QuestionImg, Button, Fade},
    data() {
      return {
        count: 0,
        statusArr: [],
        data: {
        }
      }
    },
    computed: {
      gameData() {
        return Listener.gameData
      }
    },
    mounted() {
      console.log(this.gameData)
      this.$refs.ele.forEach(() => {
        this.statusArr.push(0)
      })
      this.statusArr[0] = 1
    },
    methods: {
      changeView() {
        this.statusArr = []
        this.count++;
        this.$refs.ele.forEach(() => {
          this.statusArr.push(0)
        })
        if (this.count < this.$refs.ele.length) {
          this.statusArr[this.count] = 1
        } else {
          this.$router.push({path: '/Result'})
        }
        console.log(this.statusArr)
      }
    }
  }
</script>

<style scoped>
#question-wrapper .button{
  position: absolute;
  bottom: 1.23rem;
  left: 50%;
  margin-left: -2.906667rem;
}
</style>
