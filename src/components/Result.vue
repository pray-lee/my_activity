<template>
  <Fade>
  <div id="result">
    <div class="result-wrapper">
      <div class="poster-wrapper">
        <Poster v-if="!!ticket" :userHeadImg="userHeadImg" :ticket="ticket" class="poster"></Poster>
      </div>
      <RuleButton class="rule-position" :displayObj="showOrHide"></RuleButton>
      <div class="save-notice">
        <p>长按保存图片   下拉更有惊喜</p>
        <div class="drop-icon"></div>
      </div>
      <Swiper></Swiper>
      <div id="invite">
        <p>您已经邀请<span>{{inviteUserHeadList.length}}</span>名好友</p>
      </div>
      <div class="invite-list-wrapper">
        <div id="invite-list" ref="wrapper">
          <div class="content">
            <div class="img-wrapper" v-for="count in 30" :key="count">
              <img v-if="!!inviteUserHeadList.length" :src="inviteUserHeadList[count-1]" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="rule">
        <div class="title">规则说明</div>
        <!--<div class="title-second">秀出你的[艺术世界]给好友吧</div>-->
        <div class="title-second">长按保存图片并分享好友</div>
        <div class="title-second">邀请好友关注，免费get珠宝</div>
        <div class="rule-content">
          <p>邀请6名好友关注可获<span>300</span>元珠宝兑换券<em>（无门槛使用）</em></p>
          <!--<p>任意产品使用</p>-->
          <p>邀请9名好友关注可获<span>600</span>元珠宝兑换券<em>（无门槛使用）</em></p>
          <!--<p>对应产品使用</p>-->
          <p>邀请30名好友关注可获<span>2000</span>元珠宝兑换券<em>（限量300份）</em></p>
          <!--<p>限定产品使用</p>-->
        </div>
        <div class="notice">
          <p>*请获奖后凭微信公众号信息到IP国贸旗舰店换取奖品，到店还有更多惊喜</p>
        </div>
      </div>
      <Button word="重回艺术世界" class="button" @click.native="goBack"></Button>
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
import Listener from '@/common/eventBus'
import config from '@/api/config'
import $ from 'jquery'

export default {
  name: "Result",
  data() {
    return {
      inviteUserHeadList: [],
      userHeadImg: '',
      ticket: '',
      scroll: null,
      showOrHide: {
        show: false
      },
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
    //初始化获取相关信息
    this.init()
    //初始化邀请列表滚动条
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    })
  },
  methods: {
    goBack () {
      this.$router.push({path: '/question'})
    },
    async init() {
      //获取微信用户信息
      let userInfo = await this._getUserInfo()
      //获取用户微信二维码票据
      await this._getQRCodeTicket(userInfo)
      // 获取邀请列表（获取openid列表）
      let inviteList = await this._getOpenIdList(userInfo)
      //获取邀请用户头像(获取openid对应的用户头像)
      this._getUserHeadImgList(inviteList)
    },
    _getUserInfo () {
      let _this = this;
      return new Promise((resolve, reject) => {
        $.getJSON(`${config.wechatHost}/wechart_h5/services/wx/me/`, function(data){
          _this.userHeadImg = data.headimgurl;
          resolve(data)
        });
      })
    },
    _getQRCodeTicket(userInfo) {
      console.log('%c getQRCodeOriginImg---', 'font-weight:bold;color:#ff5252;font-size: 18px')
      let _this = this
      return new Promise((resolve, reject) => {
        $.ajax({
          type: 'POST',
          url: `${config.wechatHost}/wechart_h5/services/wx/getQrCode`,
          data: {
            appid: userInfo.appid,
            openid: userInfo.openid,
            id:'c44ed55a9ab911e8979600163e008088',
            type: 'ACTION'
          },
          success: function (data) {
            if(data.code == 0){
              _this.ticket = data.dataObject.ticket
              console.log(Listener.ticket, 'qrcode ticket....')
              resolve()
            }
          }
        })
      })
    },
    _getOpenIdList(userInfo) {
      console.log('%c getOpenidList---', 'font-weight:bold;color:#ff5252;font-size: 18px')
      return new Promise((resolve, reject) => {
        $.ajax({
          type: 'POST',
          url: `${config.wechatHost}/wechart_h5/services/getPullMembers`,
          data: {
            appId: userInfo.appid,
            openId: userInfo.openid,
            sourceId: Listener.actid,
            sourceType: 'ACTION'
          },
          success: function (data) {
            let tmpObj = {}
            tmpObj.appId = userInfo.appid
            tmpObj.data = data.dataObject
            resolve(tmpObj)
          }
        })
      })
    },
    _getUserHeadImgList(list) {
      console.log('%c getUserHeadImgList---', 'font-weight:bold;color:#ff5252;font-size: 18px')
      list.data.forEach(item => {
        this._getUserHeadImg(item.openId, list.appId)
      })
    },
    _getUserHeadImg(item, appId) {
      console.log('&c getUserHeadimg---', 'font-weight:bold;color:#ff5252;font-size: 18px')
      let _this = this;
      $.ajax({
        type: 'POST',
        url: `${config.wechatHost}/wechart_h5/services/getWxUserInfo`,
        data: {
          openid: item,
          appid: appId
        },
        success: function (result) {
          if(result.success)
            _this.inviteUserHeadList.push(JSON.parse(result.dataObject.user).headimgurl)
        }
      })
    }
  }
}
</script>

<style scoped>
#result{
  width: 10rem;
}
#result .result-wrapper{
  width:100%;
  height:100%;
  position:relative;
  background:#fff;
  padding-top: .5rem;
}
.poster-wrapper {
  width: 6.40rem;
  height: 11.36rem;
  position:relative;
  z-index:1;
  top:0;
  left:0;
  bottom:0;
  right: 0;
  margin: auto;
  margin-bottom: .2rem;
  background:#e7e7e6;
  box-shadow: 0px 1px 16px #888888;
}
#result .rule-position {
  top: 10.61rem;
  right: 0.61rem !important;
}
.save-notice{
  margin-bottom: .5rem
}
.save-notice p{
  font-size: .32rem /* 24/75 */;
  text-align:center;
  line-height: .8rem /* 60/75 */;
  color: #333;
}
.drop-icon{
  margin: .1rem auto;
  width: .346667rem;
  height: .32rem;
  background:url(../assets/images/drop.png) center center no-repeat;
  background-size: .346667rem /* 26/75 */ .32rem /* 24/75 */
}
.poster {
  margin-bottom: 1.20rem;
}

#result .button {
  margin-bottom: 0.80rem;
  position:static
}

#invite {
  width: 5.31rem;
  height: 0.77rem;
  margin: 0 auto;
  margin-top: .4rem;
}
#invite p {
  font-size: 0.37rem;
  color: #222;
  line-height: .77rem
}

#invite p span {
  font-size: 0.48rem;
  font-weight:bold;
  padding:0 .1rem
}

.invite-list-wrapper {
  width: 9.20rem;
  height: 4.32rem;
  margin: 0 auto;
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
  background: #d8d8d8;
  box-sizing: border-box;
  border: 0.03rem solid transparent;
  overflow:hidden;
  box-shadow: 1px 1px 8px #888888;
}

#invite-list img {
  display:block;
  width: 100%;
  height: 100%;
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
  /*height: 24px;*/
  margin-bottom: 0.08rem;
  margin-top: 0.08rem;
  text-align: left;
  line-height: 24px;
  font-size: 0.43rem;
  color: #222222;
  font-size: .32rem /* 24/75 */
}
.title-second.second{
  margin-top: 0
}

.rule-content {
  padding-top: .2rem;
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
.rule-content em{
  font-style: normal;
  color:#c5a249
}
.rule-content span {
  font-size: 0.53rem;
  font-weight: 500;
  margin: 0 0.08rem;
  color: #c5a249
}
.notice{
  text-align:left;
  font-size: .24rem /* 18/75 */;
  color:#555555
}
</style>
