<template>
  <div class="Login">
    <h1>Onboardin Login</h1>
    <p class="Login__lorem">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
    <div class="Login__form">
      <p class="Login__label">USERNAME</p>
      <input v-model="username" placeholder="username">
      <p class="Login__label">PASSWORD</p>
      <input type="password" v-model="password" placeholder="password"> 
      <button class="Login__button" @click="checkUser">ACCEDI</button> 
      <a href="#">Recupera Password</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {userInfo} from '../userInfo';

@Component

export default class LoginComponent extends Vue {

  public username: string='';
  public password: string='';

  created(){
      this.axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response)=>{
        this.$store.commit('setLista',response.data)
      })
  }
   public checkUser(){
     let newLista=this.$store.getters.getLista;
     let chekV= false;
     //console.log(newLista)
     
     newLista.map((item, index) => {
       if(item.username==this.username){
         if(item.address.zipcode==this.password){
           console.log(true)
           this.chekV=true;
         }
       }
       if(this.chekV){
         console.log(chekV)
         this.$router.push('listUser')
       }
     });
   }
} 
</script>

<style scoped lang="scss">
$gutter: 8px;
$color_conectus:#005dad;
.Login{
  font-size: $gutter*2;
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  &__lorem{
    margin-top: 0px;
    margin-bottom: $gutter*6;
    color: #727f8c;
  }
  &__label{
    font-weight: bold;
  }
  &__form{
    width: 650px;
    input{
      width: 642px;
      padding: $gutter;
      padding-right: 0;
      height: $gutter*5;
    }
    a{
      color:$color_conectus;
      text-decoration: none;
    }
  }
  &__button{
    width: 650px;
    height: 56px;
    margin-top: 16px;
    margin-bottom: 16px;
    border: none;
    height: $gutter*5;
    background: $color_conectus;
    color:white;
  }
}
</style>
