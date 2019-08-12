import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: localStorage.getItem('store')
  },
  mutations: {
    setName (state, msg) {
      state.name = msg
    }
  }
})
