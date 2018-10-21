import Vue from 'vue'
import Router from 'vue-router'
import QuestionImg from '@/components/QuestionImg'
import QuestionWord from '@/components/QuestionWord'
import IndexPage from '@/components/IndexPage'
import Rule from '@/components/Rule'
import Result from '@/components/Result'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
      children: [
        {
          path: 'rule',
          name: 'Rule',
          component: Rule
        },
      ]
    },{
      path: '/imgType/:id',
      name: 'imgType',
      component: QuestionImg
    },{
      path: '/wordType/:id',
      name: 'wordType',
      component: QuestionWord
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
