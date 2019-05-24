import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:'gianni',
    cognome:'bello'
  },
  getters:{
    getName:(state)=>{
      return `${state.name} ${state.cognome}`;
    },
  },
  mutations: {
    changeName:(state, value)=>{
      state.name=value;
    },
    changeSurname:(state, value)=>{
      state.cognome=value;
    }
  },
  actions: {

  },
  strict:true,
  
});
