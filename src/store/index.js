import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: {},
    application: {},
  },
  mutations:{
    setsession: (state, payload) =>{
      state.session = payload
    },
    setApplication: (state, payload) =>{
      state.application = payload
    }
  },
  getters: {
    getsession: state =>state.session,
    getApplication: state => state.application
  },
  actions:{
    
  }
})
  