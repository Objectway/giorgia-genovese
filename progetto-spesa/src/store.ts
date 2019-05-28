import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mediaTicket:0
  },
  getters:{
    getMediaTicket:(state)=>{
      return `${state.mediaTicket} `;
    },
  },
  mutations: {
    changeMedia:(state, value)=>{
      state.mediaTicket=value;
      console.log(state.mediaTicket)
    },
  },
  actions: {

  },
  //strict: true,
});
