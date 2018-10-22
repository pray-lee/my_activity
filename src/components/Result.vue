<template>
  <Fade>
    <div id="result">
      <div class="result-wrapper">
        <Poster class="poster"></Poster>
        <RuleButton class="rule-position" :displayObj="showOrHide"></RuleButton>
        <Button word="重新测一次" class="button" @click.native="goBack"></Button>
        <Swiper></Swiper>
        <div id="invite">
          <p>您已经邀请<span>3</span>名好友</p>
        </div>
        <div class="invite-list-wrapper">
          <div id="invite-list" ref="wrapper">
            <div class="content">
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
              <div class="img-wrapper">
                <img src="../assets/images/close_icon.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="rule">
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
    </div>

  </Fade>
</template>

<script>
  import RuleButton from '@/components/RuleButton'
  import Poster from '@/components/Poster'
  import Button from '@/components/Button'
  import Swiper from '@/components/Swiper'
  import Fade from '@/components/Fade'
  import BScroll from 'better-scroll'

  export default {
    name: "Result",
    data() {
      return {
        scroll: null,
        showOrHide: {
          show: false
        }
      }
    },
    components: {
      RuleButton,
      Poster,
      Button,
      Swiper,
      Fade
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper)
      })
    },
    methods: {
      goBack () {
        this.$router.push({path: '/question'})
      }
    }
  }
</script>

<style scoped>
  #result .result-wrapper{
    width:100%;
    height:100%;
    background: #fff;
    position:relative;
  }

  #result .rule-position {
    top: 10.61rem;
    right: 0.61rem !important;
  }

  .poster {
    margin-bottom: 1.20rem;
  }

  #result .button {
    margin-bottom: 0.80rem;
    position:static
  }

  #invite {
    width: 3.31rem;
    height: 0.77rem;
    margin: 0 auto;
    margin-top: 0.64rem;
    margin-bottom: 0.21rem;
  }

  #invite p {
    font-size: 0.37rem;
    color: #222;
    line-height: .77rem
  }

  #invite p span {
    font-size: 0.48rem;
  }

  .invite-list-wrapper {
    width: 9.20rem;
    height: 4.32rem;
    margin: 0 auto;
    border-top: 0.03rem solid #000;
    border-bottom: 0.03rem solid #000;
    padding: 0.64rem 0;
  }

  #invite-list {
    width: 100%;
    height: 100%;
    overflow: hidden
  }

  #invite-list .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  #invite-list .img-wrapper {
    flex: 0 0 auto;
    width: 1.07rem;
    height: 1.07rem;
    border-radius: 50%;
    box-sizing: content-box;
    margin: 0.21rem;
    background: #ccc;
    box-sizing: border-box;
    border: 0.03rem solid transparent;
  }

  #invite-list img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .rule {
    padding: 0 0.43rem;
  }

  .title {
    width: auto;
    text-align: left;
    line-height: 0.67rem;
    margin-top: 0.80rem;
    margin-bottom: 0.43rem;
    padding-left: 0.21rem;
    font-size: 0.48rem;
    border-left: 0.11rem solid #000;
  }

  .title-second {
    width: auto;
    height: 24px;
    margin-bottom: 0.64rem;
    text-align: left;
    line-height: 24px;
    font-size: 0.43rem;
    color: #222222
  }

  .rule-content {
    padding-bottom: .64rem;
  }

  .rule-content p {
    text-align: left;
    height: .43rem;
    line-height: 0.43rem;
    margin-bottom: 0.27rem;
    font-size: 0.32rem;
    color: #222222
  }

  .rule-content span {
    font-size: 0.53rem;
    font-weight: 500;
    margin: 0 0.08rem;
  }

  .notice {
    padding-bottom: 0.64rem;
    line-height: 0.43rem;
    text-align: left;
    font-size: 0.25rem;
    color: #666666
  }
</style>
