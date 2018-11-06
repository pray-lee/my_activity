export default function (wx, {
  shareUrl='',
  activityTitle='',
  activityDesc='',
  imgUrl=''
}) {
  console.log(shareUrl, activityTitle, activityDesc, imgUrl)
  wx.ready(function () {
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: activityTitle || '', // 分享标题
      link: shareUrl || '', // 分享链接
      imgUrl: shareIcon || '', // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: activityTitle || '', // 分享标题
      desc: activityDesc || '', // 分享描述
      link: shareUrl || '', // 分享链接
      imgUrl: shareIcon || '', // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
  })
}
