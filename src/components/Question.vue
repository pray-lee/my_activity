<template>
  <div id="question">
    <div class="question-wrapper">
      <p>中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</p>
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
  position:relative
}
#question p{
  width: 6.826667rem /* 256/37.5 */;
  line-height: .666667rem /* 25/37.5 */;
  text-align:left;
  font-size: .426667rem /* 16/37.5 */;
}
.check-item{
  position:absolute !important;
  right: 0;
  top: .4rem;
}

</style>
