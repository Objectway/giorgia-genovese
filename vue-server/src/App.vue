<template>
  <div id="app">
    <pop-up-alert :display="status" ></pop-up-alert>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/popUp">il pop che non va</router-link>
      {{$store.state.name}}
    </div>
    <router-view/>
    
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PopUpAlert from './components/PopUpAlert.vue';

@Component({
  components:{
    PopUpAlert
  }
})

export default class App extends Vue{
  public status:string ='ciao';
  public lista=['ettore','armando','carlo'];

  public showLista(data: string){
    
    if(data=='200'){
          this.lista.sort();
          console.log(this.lista)
    }
  }
  public setStatus(status:string){
    this.status=status;
    console.log(status)
  }

  created(){
      this.axios.interceptors.response.use((data: any)=>{
        this.showLista(data.status);
        this.setStatus(status);
        console.log(status)
        return data;
      },(error: any)=>{
        //status=error;
        this.setStatus(error)
        return Promise.reject(this.setStatus(error));
      });
      this.axios.get('https://httpstat.us/500')
      .then((response)=>{
        console.log(response.data)
      });

      console.log(this.$store.getters.getFullName);
      console.log(this.$store.getters.getFullNameReverse);
      this.$store.commit('changeName', ' ciccio');
      this.$store.dispatch('setNameAndSurname', {
        name: 'Maria',
        surname: 'Di Vietri'
      })
  } 
   
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
