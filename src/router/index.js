import Vue from 'vue'
import Router from 'vue-router'
import QuestionWrapper from '@/components/QuestionWrapper'
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
    },
    {
      path: '/question',
      name: 'QuestionWrapper',
      component: QuestionWrapper,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },{
      path: '*',
      redirect: '/'
    }
  ]
})
