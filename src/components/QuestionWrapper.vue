<template>
  <Fade>
    <div id="question-wrapper" v-if="gameData!=null">
      <template v-for="(item, index) of gameData.questions">
        <transition enter-active-class="animated fadeIn">
          <QuestionImg :isChangeOver="item.isChangingOver" :isClicked="isClicked" v-if="item.qtype===1" :title="item.qcontent" :options="item" :qkey="item.qkey" ref="ele"
                       v-show="statusArr[index]" :key="item.qKey" @change="receiveValue"></QuestionImg>
          <QuestionWord :isChangeOver="item.isChangingOver" :isClicked="isClicked" v-else :title="item.qcontent" :options="item" :qkey="item.qkey" ref="ele"
                        v-show="statusArr[index]" :key="item.qKey" @change="receiveValue"></QuestionWord>
        </transition>
      </template>
      <Button v-if="count==gameData.questions.length-1" word="查看我的超级IP" @click.native="_changeView"
              class="button"></Button>
      <Button v-else word="下一题" @click.native="_changeView" class="button"></Button>
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
        postData: {
          id: Listener.gameData.id,
          options: {}
        },
        answer: '',
        //加一个标志，判断进入答题页面有没有点击过,如果没有，取第一个选项
        isClicked: false
      }
    },
    computed: {
      gameData() {
        return Listener.gameData
      }
    },
    mounted() {
      this._initQuestionPage()
    },
    methods: {
      _resetClickState() {
        this.isClicked = false
      },
      _changeClickState() {
        this.isClicked = true
      },
      _initQuestionPage(){
        //初始化，默认选中第一题
        this.$refs.ele.forEach(() => {
          this.statusArr.push(0)
        })
        this.statusArr[0] = 1
      },
      //组装要提交的问题
      _constructOption() {
        //点击保存上一页问题,如果没有点击过，取第一项的答案，点击过，取接收到的项
        let name = Listener.gameData.questions[this.count - 1].qkey
        if (this.isClicked) {
          this.postData.options[name] = this.answer
        } else {
          if (Listener.gameData.questions[this.count - 1].options.length > 0)
            this.postData.options[name] = Listener.gameData.questions[this.count - 1].options[0].okey
        }
      },
      //点击切换问题选项
      _changeView() {
        this.statusArr = []
        //计数判断当前点击的是不是最后一个按钮，如果是，显示提交的按钮文字
        this.count++;
        this.$refs.ele.forEach(() => {
          this.statusArr.push(0)
        })
        //点击的时候重组问题答案
        this._constructOption()
        if (this.count < this.$refs.ele.length) {
          //激活当前问题
          this.statusArr[this.count] = 1
        } else {
          //提交并且跳转
          Listener.postData = this.postData;
          this.$router.push({path: '/Result'})
        }
        //进入下一页的时候重置点击标志
        this._resetClickState()
      },
      receiveValue(val) {
        //当监听到receiveValue时，说明用户一定点击过当前页面的选项，然后改变标志状态
        this._changeClickState()
        this.answer = val
      }
    }
  }
</script>

<style scoped>
  #question-wrapper .button {
    position: absolute;
    bottom: 1.23rem;
    left: 50%;
    margin-left: -2.906667rem;
  }
</style>
