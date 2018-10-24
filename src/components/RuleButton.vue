<template>
  <div id="rule-area">
    <div id="rule-button" @click="handleOpen">规则</div>
    <Rule v-show="!!displayObj.show"></Rule>
  </div>
</template>

<script>
  import Rule from '@/components/Rule'
  import Listener from '@/common/eventBus'
  export default {
    name: "RuleButton",
    components: {
      Rule
    },
    props: ['displayObj'],
    methods: {
      handleOpen () {
        this.displayObj.show = true
        Listener.$on('close', () => {
          this.displayObj.show = false
        })
      }
    }
  }
</script>

<style scoped>
#rule-area{
  z-index: 999;
  position:absolute;
  width: 1.07rem;
  height:1.07rem;

}
#rule-button{
  width:100%;
  height: 100%;
  border-radius: 50%;
  background:#666;
  text-align: center;
  line-height:1.07rem;
  font-size:0.35rem;
  color:#fff
}
</style>
