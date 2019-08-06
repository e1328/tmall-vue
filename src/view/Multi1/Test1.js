// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Test1.vue'
import router from '../../router/index1'
import axios from 'axios'
import Vuex from 'vuex'
import store from '../../store/index1'

Vue.use(Vuex)
Vue.prototype.axios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('store')) { // 判断当前用户的登录信息loginInfo是否存在
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app1',
  store,
  router,
  components: { App },
  template: '<App/>'
})
