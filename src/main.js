// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/lib/flexible'
import './css/reset.css'
import './css/animate.css'
// import wxShare from '@/common/wxShare'
// import shareOptions from '@/common/wx/shareOptions'
Vue.config.productionTip = false
//增加一个router守卫监听，触发微信分享。
// router.afterEach((to, from) => {
//   wxShare(shareOptions);
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
