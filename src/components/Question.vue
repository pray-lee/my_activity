<template>
  <div id="question">
    <div class="question-wrapper">
      <p><span>{{content}}</span></p>
      <Checkbox :value="value" class="check-item" :name="name" :checked="checked" @change="receiveValue"></Checkbox>
    </div>
  </div>
</template>

<script>
  import Checkbox from '@/components/Checkbox'
  export default {
    name: 'Question',
    props: ['value', 'checked', 'name', 'content'],
    components: {
      Checkbox
    },
    methods: {
      receiveValue(val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style scoped>
#question{
  flex: 0 0 auto;
  width: 3.373333rem /* 253/75 */; 
  height: .906667rem /* 68/75 */;
  line-height: .906667rem;
  margin-bottom: .1rem;
  text-align:left
}
.question-wrapper {
  position:relative;
  display:inline-block;
}
#question span{
  border-bottom: .026667rem /* 2/75 */ solid #555;
  font-size: .333333rem /* 25/75 */;
}
.check-item >>> label{
  width: 100%;
  height: 100%
}
.check-item >>> label::after{
  right:-1.2rem;
  top:-0.09rem
}
</style>
