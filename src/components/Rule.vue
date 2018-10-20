<template>
  <Fade>
    <div id="rule-wrapper">
      <div id="rule">
        <i class="close" @click="close"></i>
        <div class="title">规则说明</div>
        <div class="title-second">秀出你的超级IP给好友吧</div>
        <div class="rule-content">
          <p>6名好友关注即可获得<span>300</span>元代金券</p>
          <p>6名好友关注即可获得<span>600</span>元代金券</p>
          <p>6名好友关注即可获得<span>3000</span>元代金券</p>
        </div>
        <div class="notice">
          <p>请获奖后凭微信公众号信息到IP国贸旗舰店换取奖品，到店还有更多惊喜</p>
        </div>
      </div>
    </div>
  </Fade>
</template>

<script>
  import Fade from '@/components/Fade'
  import Listener from '@/common/eventBus'
  export default {
    name: "Rule",
    components: {
      Fade
    },
    methods: {
      close () {
        Listener.$emit('close')
      }
    }
  }
</script>

<style scoped>
#rule-wrapper{
  position:fixed;
  z-index: 9999;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background:rgba(0, 0, 0, .6);
  color:#333333
}
#rule{
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right: 0;
  background:#fff;
  width: 7.65rem;
  height: 9.95rem;
  margin: auto
}
.close{
  position:absolute;
  top:0.43rem;
  right:0.43rem;
  width: 0.69rem;
  height: 0.69rem;
  background:url('../assets/images/close_icon.png') center center no-repeat;
  background-size: cover
}
.title{
  width: auto;
  text-align: center;
  line-height: 0.67rem;
  margin-top: 1.07rem;
  margin-bottom: 1.07rem;
  font-size: 0.48rem;
}
.title-second{
  width: auto;
  height: 24px;
  margin-bottom: 0.85rem;
  text-align:center;
  line-height: 24px;
  font-size: 0.43rem;
  color:#222222
}
.rule-content{
  padding-bottom: 1.20rem;
}
.rule-content p{
  text-align:center;
  height: .43rem;
  line-height: 0.43rem;
  margin-bottom: 0.27rem;
  font-size: 0.32rem;
  color:#222222
}
.rule-content span{
  font-size: 0.53rem;
  font-weight:500;
  margin:0 0.08rem;
}
.notice{
  margin:0 auto;
  width: 6.37rem;
  line-height: 0.43rem;
  text-align: center;
  font-size: 0.25rem;
  color:#666666
}
</style>
