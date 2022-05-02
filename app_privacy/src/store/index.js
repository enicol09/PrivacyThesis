import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currUser: null,
    userEmail: null,
  },
  getters: {
    currUser(state) {
      // console.log("")
      return state.currUser;
    },
    getRegisterUserEmail(state) {
      // console.log("")
      return state.userEmail;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.currUser = payload;
      //console.log("setUser: " + JSON.stringify(state.currUser))
    },
  },
  actions: {
  },
  modules: {
  }
})
