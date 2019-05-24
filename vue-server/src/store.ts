import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:'gianni',
    surname:'bello'
  },
  getters:{
    getFullName:(state)=>{
     return `${state.name} ${state.surname}`;
    },
    getFullNameReverse:(state)=>{
      return `${state.surname} ${state.name}`;
    }
  },
  mutations: {
    changeName:(state, value)=>{
      state.name=value;
    },
    changeSurname:(state, value)=>{
      state.surname=value;
    }
  },
  actions: {
    setNameAndSurname : ({commit, state}, args)=>{
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve();
        }, 1000)
      }).then(()=>{
        commit('changeName', args.name);
        commit('changeSurname', args.surname)
      })
    }
  },
  strict: true
});

