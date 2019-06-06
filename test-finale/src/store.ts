import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoLista:[],
    infoPhoto:'',
    checkV:false,
    zipcode:'',
    consenso:false
  },
  getters:{
    getLista: (state) => {
      return state.infoLista
    },
    getPhoto: (state) => {
      return state.infoPhoto.thumbnailUrl;
    },
    getAdd:(state)=>{
      return state.consenso;
    }
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
    },
    setAdd:(state,value)=>{
      state.consenso=value;
    }
  },
  // actions: {

  // },
  strict:true
});
