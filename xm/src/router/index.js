import Vue from 'vue'
import Router from 'vue-router'
import location from '@/components/location'
import mine from '@/components/mine'
import waimai from '@/components/waimai'
import search from '@/components/search'
import dingdan from '@/components/dingdan'

import register from '@/components/register'
import login from '@/components/login'
import city from '@/components/city'
import reset from '@/components/reset'
import dianmian from '@/components/dianmian'
import dianmian1 from '@/components/dianmian1'
import shopDetail from '@/components/shopDetail'
import lunboDetail from '@/components/lunboDetail'
import lunboDetail1 from '@/components/lunboDetail1'

import zhanghu from '@/components/zl/zhanghu'
import changeName from '@/components/zl/changeName'
import locationChange from '@/components/zl/locationChange'
import addLocation from '@/components/zl/addLocation'
import mineMoney from '@/components/zl/mineMoney'
import bank from '@/components/zl/bank'
import addLoa from '@/components/zl/addLoa-2'
import youhui from '@/components/zl/youhui'
import hongbao from '@/components/zl/hongbao'
import daijinquan from '@/components/zl/daijinquan'
import daijinquans from '@/components/zl/daijinquans'
import jifen from '@/components/zl/jifen'
import jifens from '@/components/zl/jifens'
import jifenShop from '@/components/zl/jifenShop'
import vip from '@/components/zl/vip'
import vipInstro from '@/components/zl/vipInstro'
import zhifu from '@/components/zl/zhifu'
import duihuanVip from '@/components/zl/duihuanVip'
import shopRecord from '@/components/zl/shopRecord'
import serviceCentre from '@/components/zl/serviceCentre'
import centerA from '@/components/zl/centerA'
import centerB from '@/components/zl/centerB'
import centerC from '@/components/zl/centerC'
import centerD from '@/components/zl/centerD'
import centerTV from '@/components/zl/centerTV'
import centerPay from '@/components/zl/centerPay'
import centerElse from '@/components/zl/centerElse'
import downLoad from '@/components/zl/downLoad'
import hongbaos from '@/components/zl/hongbaos'
import history from '@/components/zl/history'
import duihuan from '@/components/zl/duihuan'
import tuijian from '@/components/zl/tuijian'
import centerOntime from '@/components/zl/centerOntime'
import instroVip from '@/components/zl/instroVip'
import methodVip from '@/components/zl/methodVip'
import hongbaovip from '@/components/zl/hongbaovip'
import active from '@/components/zl/active'
import buqian from '@/components/zl/buqian'
import youhuiVip from '@/components/zl/youhuiVip'
import mianze from '@/components/zl/mianze'
import daijinquanInstro from '@/components/zl/daijinquanInstro'
import shangwu from '@/components/zl/shangwu'
import yue from '@/components/zl/yue'
import choazan from '@/components/zl/choazan'
import nimingShop from '@/components/zl/nimingShop'
import huodong from '@/components/zl/huodong'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'location',
      component: location
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/waimai',
      name: 'waimai',
      component: waimai
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/waimai',
      name: 'waimai',
      component: waimai
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan,
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/dianmian',
      name: 'dianmian',
      component: dianmian
    },
    {
      path: '/shopDetail',
      name: 'shopDetail',
      component: shopDetail
    },
    {
      path: '/dianmian1',
      name: 'dianmian1',
      component: dianmian1
    },
    {
      path: '/lunboDetail',
      name: 'lunboDetail',
      component: lunboDetail,
      children: [
        {
          path: '/lunboDetail1',
          name: 'lunboDetail1',
          component: lunboDetail1
        },
      ]
    },
    {
      path: '/zhanghu',
      name: 'zhanghu',
      component: zhanghu,

    },
    {
      path: '/changeName',
      name: 'changeName',
      component: changeName
    },
    {
      path: '/locationChange',
      name: 'locationChange',
      component: locationChange
    },
    {
      path: '/mineMoney',
      name: 'mineMoney',
      component: mineMoney
    },
    {
      path: '/addLocation',
      name: 'addLocation',
      component: addLocation
    },
    {
      path: '/bank',
      name: 'bank',
      component: bank
    },
    {
      path: '/addLoa',
      name: 'addLoa',
      component: addLoa
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/centerOntime',
      name: 'centerOntime',
      component: centerOntime
    },
    {
      path: '/youhui',
      name: 'youhui',
      component: youhui,
      children: [
        {
          path: '/',
          name: 'hongbaos',
          component: hongbaos,
        }, {
          path: '/hongbaos',
          name: 'hongbaos',
          component: hongbaos,
        },
        {
          path: '/daijinquan',
          name: 'daijinquan',
          component: daijinquan
        },
      ]
    },
    {
      path: '/hongbao',
      name: 'hongbao',
      component: hongbao
    },
    {
      path: '/daijinquans',
      name: 'daijinquans',
      component: daijinquans
    },

    {
      path: '/jifen',
      name: 'jifen',
      component: jifen
    },
    {
      path: '/jifens',
      name: 'jifens',
      component: jifens
    },
    {
      path: '/jifenShop',
      name: 'jifenShop',
      component: jifenShop
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/vipInstro',
      name: 'vipInstro',
      component: vipInstro
    },
    {
      path: '/daijinquanInstro',
      name: 'daijinquanInstro',
      component: daijinquanInstro
    },
    {
      path: '/mianze',
      name: 'mianze',
      component: mianze
    },
    {
      path: '/zhifu',
      name: 'zhifu',
      component: zhifu
    },
    {
      path: '/buqian',
      name: 'buqian',
      component: buqian
    },
    {
      path: '/youhuiVip',
      name: 'youhuiVip',
      component: youhuiVip
    },
    {
      path: '/duihuanVip',
      name: 'duihuanVip',
      component: duihuanVip
    },
    {
      path: '/shopRecord',
      name: 'shopRecord',
      component: shopRecord
    },
    {
      path: '/serviceCentre',
      name: 'serviceCentre',
      component: serviceCentre
    },
    {
      path: '/centerA',
      name: 'centerA',
      component: centerA
    },
    {
      path: '/huodong',
      name: 'huodong',
      component: huodong
    },
    {
      path: '/centerB',
      name: 'centerB',
      component: centerB
    },
    {
      path: '/centerC',
      name: 'centerC',
      component: centerC
    },
    {
      path: '/choazan',
      name: 'choazan',
      component: choazan
    },
    {
      path: '/nimingShop',
      name: 'nimingShop',
      component: nimingShop
    },
    {
      path: '/centerD',
      name: 'centerD',
      component: centerD
    },
    {
      path: '/shangwu',
      name: 'shangwu',
      component: shangwu
    },
    {
      path: '/yue',
      name: 'yue',
      component: yue
    },
    {
      path: '/centerTV',
      name: 'centerTV',
      component: centerTV
    },
    {
      path: '/centerPay',
      name: 'centerPay',
      component: centerPay
    },
    {
      path: '/centerElse',
      name: 'centerElse',
      component: centerElse
    },
    {
      path: '/instroVip',
      name: 'instroVip',
      component: instroVip
    },
    {
      path: '/hongbaovip',
      name: 'hongbaovip',
      component: hongbaovip
    },
    {
      path: '/methodVip',
      name: 'methodVip',
      component: methodVip
    },
    {
      path: '/downLoad',
      name: 'downLoad',
      component: downLoad
    },
    {
      path: '/duihuan',
      name: 'duihuan',
      component: duihuan
    },
    {
      path: '/tuijian',
      name: 'tuiijan',
      component: tuijian
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },
  ]
})
