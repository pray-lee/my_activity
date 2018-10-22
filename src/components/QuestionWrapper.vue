<template>
  <Fade>
    <div id="question-wrapper">
      <template v-for="(item, index) of data.data">
        <transition enter-active-class="animated fadeIn">
          <QuestionImg v-if="item.type==='img'" :param="item" ref="ele" v-show="statusArr[index]" :key="item.id"></QuestionImg>
          <QuestionWord v-if="item.type==='word'" :param="item" ref="ele" v-show="statusArr[index]" :key="item.id"></QuestionWord>
        </transition>
      </template>
      <Button word="下一题" @click.native="changeView"></Button>
      <router-view name="QuestionWrapper"></router-view>
    </div>
  </Fade>
</template>

<script>
  import QuestionImg from "./QuestionImg";
  import QuestionWord from "./QuestionWord";
  // import Listener from "@/common/eventBus";
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
          data: [{
            id:0,
            type:'img'
          },{
            id:1,
            type: 'word'
          },{
            id:3,
            type: 'word'
          },{
            id:4,
            type:'img'
          },{
            id:5,
            type: 'word'
          }]
        }
      }
    },
    // mounted() {
    //   this.$refs.ele.forEach(item=>{
    //     item.$el.className = 'hide'
    //   })
    //   this.$refs.ele[0].$el.className = 'show'
    //   Listener.$on('receiveId', (id)=>{
    //     console.log(this.$refs.ele)
    //     this.$refs.ele[id].$el.className = "hide"
    //     if(this.$refs.ele[id+1]){
    //       this.$refs.ele[id+1].$el.className = 'show'
    //     }else{
    //       this.$router.push({path: '/result'})
    //     }
    //   })
    // },
    mounted() {
      this.$refs.ele.forEach(() => {
        this.statusArr.push(0)
      })
      this.statusArr[0] = 1
      console.log(this.statusArr)
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
</style>
