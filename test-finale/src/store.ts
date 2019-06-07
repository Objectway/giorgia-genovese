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
    },
    getCheck:(state)=>{
      return state.checkV;
    }
  },
  mutations: {
    /**
     * setLista salva la lista presa con la chiamata axios
     * nella variabile infoLista dello state
     */
    setLista:(state, value)=>{
      state.infoLista=value;
    },
    /**
     * setPhoto salva le foto prese con la chiamata axios
     * nella variabile infoPhoto dello state
     */
    setPhoto:(state, value)=>{
      state.infoPhoto=value;
    },
    /**
     * addUser inserisce nella lista salvata nello state
     * un nuovo utente
     */
    addUser:(state,value)=>{
      state.infoLista.push(value);
    },
    /**
     * setAdd modifica la variabile dello state consenso 
     * a true o false in base al consenso dato o meno 
     * dall'utente
     */
    setAdd:(state,value)=>{
      state.consenso=value;
    },
    /**
     * setCheck mopdifica il valore della variabile dello
     * state checkV in base a se l'utente che vuole effettuare 
     * il login sia predente nella lista infoLista oppure no
     */
    setCheck:(state,value)=>{
      state.checkV=value
    }
  },
  // actions: {

  // },
  strict:true
});
