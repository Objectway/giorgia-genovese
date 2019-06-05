import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoLista:[],
    infoPhoto:'',
    checkV:false,
    zipcode:''
  },
  getters:{
    getLista: (state) => {
      return state.infoLista
    },
    getPhoto: (state) => {
      return state.infoPhoto.thumbnailUrl;
    },
  },
  mutations: {
    setLista:(state, value)=>{
      state.infoLista=value;
    },
    setPhoto:(state, value)=>{
      state.infoPhoto=value;
    },
    addUser:(state,value)=>{
      state.infoLista.push(value);
      console.log(state.infoLista)
    },
    checkUser:(state,value)=>{
      state.infoLista.map((value)=>{
        state.zipcode=state.infolista.zipcode;
        console.log(state.zipcode)
      });
    }
  },
  // actions: {

  // },
  strict:true
});
