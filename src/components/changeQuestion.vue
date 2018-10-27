<template>
   <div id="change-question" @click="changeItem">
      换一组
   </div>
</template>

<script>
  import changeQuestion from '@/api/changeQuestion'
  export default {
    name: "changeQuestion",
    props: ['qkey'],
    data() {
      return {
        page: 0
      }
    },
    methods: {
      async changeItem() {
        let questions = await changeQuestion.getData(this.qkey, this.page)
        this.page++;
        this.$emit('changeItem', questions.data)
      }
    }
  }
</script>

<style scoped>
#change-question{
  position:absolute;
  z-index:99999;
  bottom: 3.4rem;
  font-size: 0.37rem;
  color:#999999;
  left: 50%;
  width: 2rem;
  height: 0.53rem;
  line-height: .6rem;
  margin-left:-.825rem;
  padding-right: 0.63rem;
  background:url(../assets/images/rotate.png) right center no-repeat;
  background-size: 0.43rem .43rem;
}
</style>
