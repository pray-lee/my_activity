import wx from 'weixin-js-sdk'
import $ from 'jquery'
import axios from 'axios'
import config from '@/api/config'
import wxConfig from './wx/wxConfig'
import wxReady from './wx/wxReady'
export default wxShare 

async function wxShare() {
  let appId = await getAppId()
  getWxConfig(appId)
}
// fn
function getAppId() {
  return new Promise((resolve, reject) => {
    $.getJSON(`${config.wechatHost}/wechart_h5/services/wx/me/`, function (data) {
      // resolve(data.appid)
    });
    resolve('123')
  })
}

function getWxConfig(appId) {
  return new Promise((resolve, reject) => {
    axios.get(`${config.wechatHost}/wechart_h5/services/wx/validateUrl`, {
        params: {
          appid: appId,
          url: location.href.split('#')[0]
        }
      })
      .then(res => {
        console.log(res)
        wxConfig(wx, res.data.data)
        wxReady(wx, shareOptions)
        resolve('success....')
      })
  })
}
