<template>
  <div id="question">
    <div class="question-wrapper">
      <p>中华人民共和国中华人民共和国中华人民共和国中华人民</p>
      <Checkbox :checkId="checkId" :checkFor="checkFor" class="check-item" :name="name" :checked="checked"></Checkbox>
    </div>
  </div>
</template>

<script>
  import Checkbox from '@/components/Checkbox'
  export default {
    name: 'Question',
    props: ['checkId', 'checkFor', 'checked', 'name'],
    components: {
      Checkbox
    }   
  }
</script>

<style scoped>
#question{
  width: 100%;
  display:flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
}
.question-wrapper{
  display:flex;
  justify-content: center;
  align-items: center;
}
#question p{
  flex:0 0 auto;
  width: 6.826667rem /* 256/37.5 */;
  line-height: .666667rem /* 25/37.5 */;
  text-align:left;
  font-size: .426667rem /* 16/37.5 */;
  margin-right:.5rem
}
.check-item{
  flex:0 0 auto;
  /*position:absolute !important;*/
  /*right: 0;*/
  /*top: 0rem;*/
  margin-left:0.2rem;
}

</style>
