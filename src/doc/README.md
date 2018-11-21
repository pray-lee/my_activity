### 项目说明
### 项目说明
文件目录结构
<pre>
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   ├── api
│   │   ├── changeQuestion.js    //问题切换接口
│   │   ├── config.js            // 接口全局配置
│   │   ├── startGame.js         // 开始答题接口
│   │   └── submitQuestion.js    // 提交生成海报接口
│   ├── assets  // 相关素材
│   │   ├── fonts //字体
│   │   ├── images //图片
│   │   └── lib    //一些用到的库
│   ├── common
│   │   ├── eventBus.js //eventbus 接收数据并转发数据的全局对象
│   │   ├── wx          //微信分享相关
│   │   │   ├── shareOptions.js   // 分享配置信息（标题，链接，副标题，icon等）
│   │   │   ├── wxConfig.js // wechat config
│   │   │   └── wxReady.js  // wechat ready
│   │   └── wxShare.js      // 调用分享接口的方法，获取相关微信签名验证信息
│   ├── components  
│   │   ├── Background.vue //活动的大背景层
│   │   ├── Begin.vue     // 开屏gif，loading
│   │   ├── Button.vue    //下一题和提交按钮
│   │   ├── CheckBox.vue  //选项组件
│   │   ├── Fade.vue      //动画包装
│   │   ├── IndexPage.vue //index首页
│   │   ├── Music.vue     //music组件
│   │   ├── Poster.vue    //海报组件
│   │   ├── Question.vue  //每一个文字问题
│   │   ├── QuestionImg.vue //图片问题 + 问题标题
│   │   ├── QuestionTitle.vue //问题标题
│   │   ├── QuestionWord.vue  //问题标题 + 文字问题
│   │   ├── QuestionWrapper.vue //答题区域 + 按钮
│   │   ├── Result.vue  //结果页，包含poster + swiper + rule + ruleButton
│   │   ├── Rule.vue //规则
│   │   ├── RuleButton.vue // 全局规则显示隐藏的按钮
│   │   ├── Swiper.vue     //swiper轮播
│   │   └── changeQuestion.vue //换一组按钮
│   ├── css
│   │   ├── animate.css
│   │   ├── animate.min.css
│   │   ├── index.css
│   │   └── reset.css
│   ├── doc
│   │   └── README.md
│   ├── main.js
│   └── router
│       └── index.js
└── static
</pre>

####  运行： 
- 安装依赖 npm install 即可
- 跑开发      npm run dev

#### 打包
- npm run build