import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '*', redirect: '/404'},
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    // {
    //   path: '/',
    //   component: () => import('../components/Index.vue')
    // }
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/Home.vue')
        },
        {
          path: 't1',
          name: 't1',
          component: () => import('../views/T1.vue')
        },
        {
          path: 'password',
          name: 'password',
          component: () => import('../views/Password.vue')
        },
        {
          path: 'msg',
          name: 'msg',
          component: () => import('../views/Msg.vue')
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: () => import('../views/UserInfo.vue')
        },
        {
          path: '404',
          name: '404',
          component: () => import('../components/404.vue')
        },
        {
          path: 'User',
          name: 'User',
          component: () => import('../views/User.vue')
        },
        {
          path: 'Seller',
          name: 'Seller',
          component: () => import('../views/Seller.vue')
        },
        {
          path: 'Sort',
          name: 'Sort',
          component: () => import('../views/Sort.vue')
        },
        {
          path: 'Brand',
          name: 'Brand',
          component: () => import('../views/Brand.vue')
        },
        {
          path: 'Shop',
          name: 'Shop',
          component: () => import('../views/Shop.vue')
        },
        {
          path: 'AddGoods',
          name: 'AddGoods',
          component: () => import('../views/AddGoods.vue')
        },
        {
          path: 'Goods',
          name: 'Goods',
          component: () => import('../views/Goods.vue')
        },
        {
          path: 'AdType',
          name: 'AdType',
          component: () => import('../views/AdType.vue')
        },
        {
          path: 'AdContent',
          name: 'AdContent',
          component: () => import('../views/AdContent.vue')
        }
      ]
    }
  ]
})
