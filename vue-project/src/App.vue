<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div>
    <button @click="clickAnimale">AnimalList</button>
    <button @click="clickProfile">ProfileCard</button>
    <component :is="componentName"></component>

   <!-- <router-view/>-->
    <h1>{{message}}</h1>
    <p v-html="messageHtml"></p>
    <a :href="url">{{linkName}}</a>
    <button @click="clickMe">clicccccccc</button>

    <div :key="card.name" v-for="card in cards">
        <card-custom :card-img="card.img" :card-name="card.name" :card-surname="card.surname"></card-custom>
        
    </div>
    <input v-model="message"  type="string"/>
    <p>{{message}}</p>
        <profile-card :color="message"></profile-card>
    <card-custom :colore="'red'"></card-custom>
    <button-custom :button-back="'red'"></button-custom>
   <!-- <div v-for="button in buttons">  
      <button-custom :button-name="button.name" :button-color="button.color"></button-custom>
    </div>-->
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import  ButtonCustom  from './components/ButtonCustom.vue';
import CardCustom from './components/CardCustom.vue';
import BadgeCustom from './components/BadgeCustom.vue';
import {EventBus} from './main';
import AnimaleList from './components/AnimaleList.vue';
import ProfileCard from './components/ProfileCard.vue';
  
  @Component({
    
    components:{
      ButtonCustom,
      CardCustom,
      BadgeCustom,
      app1: AnimaleList,
      app2: ProfileCard,
      ProfileCard
    }
  })
  
  export default class App extends Vue{
    public message: string= 'Hello darkness my hold friend';
    public messageHtml: string=' <strong>Ciaoneeeeeee</strong>';
    public linkName: string= 'clicca qui';
    public url: string = 'http://www.google.it';
    public componentName: string= 'app1';
    
    // public buttons: {[key:string]:string}[]=[
    //                     {
    //                       name: 'Clicca qua',
    //                       color: 'red'
    //                     },
    //                     {
    //                       name: 'payPal',
    //                       color:'blue'
    //                     },
    //                     {
    //                       name: 'payAmazon',
    //                       colore: 'orange'
    //                     }
    //                   ];
    public cards: {[key:string]:string}[]=[
                        {
                          img: 'https://st3.depositphotos.com/1532932/14126/v/1600/depositphotos_141260440-stock-illustration-avatar-businesswoman-portraits-in-four.jpg',
                          name: 'Maria',
                          surname: 'Navarra'
                        },
                        {
                          img: 'https://png.clipart.me/istock/previews/2745/27454452-vector-user-profile-avatar-woman-icon.jpg',
                          name: 'Elena',
                          surname:'Berruti'
                        },
                        {
                          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBpuUp8Q7XkKkGi09tcQ3NlnTEyTkfHSjROJaGEJuScvWjDaH-Q',
                          name: 'Claudia',
                          surname: 'Di Vietri'
                        }
                      ];
    created(){
      this.axios.get('https://httpstat.us/')
      .then((response)=>{
        console.log(response.data)
        
      })
    }

    public clickMe(event:any){
      console.log(event);
    }
    public clickAnimale(event:any){
      this.componentName='app1';
    }
    public clickProfile(event:any){
      this.componentName='app2';
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
