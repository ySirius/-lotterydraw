import Vue from 'vue'
import Router from 'vue-router'
import {
  lottery,
  lotteryRecord
} from './router_lottery'
Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [{
    path: '/index', // 首页
    name: 'index',
    component (resolve) {
      require.ensure(['../view/lottery/lottery.vue'], () => {
        resolve(require('../view/lottery/lottery.vue'))
      })
    } 
  },
  {
    path: '/', // 首页
    name: 'index',
    component (resolve) {
      require.ensure(['../view/lottery/lottery.vue'], () => {
        resolve(require('../view/lottery/lottery.vue'))
      })
    }
  },
    /* 抽奖 */
  lottery, lotteryRecord
  ]
})

export default router
