import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoLista:'',
    checkV:false
  },
  getters:{
    getLista: (state) => {
      return state.infoLista
    },
    // getAccess: (state) => {
    //   return state.checkV
    // }
  },
  mutations: {
    setLista:(state, value)=>{
      state.infoLista=value;
      //console.log(state.infoLista)
    },
    // setAccess:(state, value)=>{
    //   state.checkV=value;
    //   //console.log(state.infoLista)
    // }
  },
  // actions: {

  // },
  strict:true
});
