<template>
<Fade>
<div id="question_img">
    <QuestionTitle :nameZh="title" nameType=0 nameBg=""></QuestionTitle>
      <div id="question_img_items_container">
        <div class="question_img_item" v-for="(item, index) in options">
          <img :src="item.oimg" alt="">
          <Checkbox v-if="index==0" :checked="'checked'" :value="item.okey" :name="qkey" @change="receiveValue"></Checkbox>
          <Checkbox v-else :value="item.okey" :name="qkey" @change="receiveValue"></Checkbox>
        </div>
      </div>
    </div>
</Fade>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import QuestionTitle from '@/components/QuestionTitle'
import Fade from '@/components/Fade'
export default {
  name: 'QuestionImg',
  props:['title', 'options', 'qkey'],
  components: {
    QuestionTitle,
    Checkbox,
    Fade
  },
  methods: {
    receiveValue(val){
      this.$emit('change', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#question_img_items_container{
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  height: 58vh;
}
.question_img_item{
  margin: 0 .3rem;
  flex: 0 0 auto;
  width: 2.666667rem /* 100/37.5 */;
  height: 3.893333rem /* 146/37.5 */;
}
.question_img_item img{
  display:block;
  width: 2.13rem /* 80/37.5 */;
  height: 2.13rem;
  margin: 0 auto;
  margin-bottom: .8rem /* 30/37.5 */;
}
</style>
