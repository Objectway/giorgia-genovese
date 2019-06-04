import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoLista:'',
    infoPhoto:'',
    checkV:false
  },
  getters:{
    getLista: (state) => {
      return state.infoLista
    },
    getPhoto: (state) => {
      return state.infoPhoto
    },
  },
  mutations: {
    setLista:(state, value)=>{
      state.infoLista=value;
      //console.log(state.infoLista)
    },
    setPhoto:(state, value)=>{
      state.infoPhoto=value;
      console.log(state.infoPhoto)
    }
    // setAccess:(state, value)=>{
    //   state.checkV=value;
    //   //console.log(state.infoLista)
    // }
  },
  // actions: {

  // },
  strict:true
});
