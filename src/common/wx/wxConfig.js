export default function getWxConfig(wx) {
  let data = {
    appId: '123',
    timestamp: '13esfasdf',
    nonceStr: 'asdfadf',
    signature: 'alsdkjfalkfasjdfioauoiwesncvasd'
  }
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.appId, // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.nonceStr, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名，见附录1
  })
}
