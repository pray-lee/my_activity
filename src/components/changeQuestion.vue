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
    methods: {
      async changeItem() {
        let questions = await changeQuestion.getData(this.qkey)
        this.$emit('changeItem', questions.data)
      }
    }
  }
</script>

<style scoped>
#change-question{
  position:absolute;
  z-index:99999;
  bottom: 4rem;
  font-size: 0.37rem;
  color:#999999;
  left: 50%;
  width: 1.65rem;
  height: 0.53rem;
  line-height: .53rem;
  margin-left:-.825rem
}
</style>
