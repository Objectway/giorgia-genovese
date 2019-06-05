<template>
        <div class="Form">
            <div class="Form__element">
                <p>Reimposta la password</p>
                <p class="Form__label">USERNAME</p>
                <input v-model="username" placeholder="username">
                <p class="Form__label">EMAIL</p>
                <input v-model="email" placeholder="email">
            </div>
            <div class="Form__button">
                <button class="bottone" @click="checkUser" >CONFERMA</button>
                <button class="Nope__button" @click="backLogin">INDIETRO</button>
            </div>
            <p>La tua password è: </p>
        </div>
</template>

<script lang="ts">
import { Component, Vue , Prop} from 'vue-property-decorator';

@Component
export default class GetPasswordComponent extends Vue {

    public username: string='';
    public email:string='';
    public zipcode:string='';

    created(){
      this.axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response)=>{
        this.$store.commit('setLista',response.data)
      })
  }
  public checkUser(){
     let newLista=this.$store.getters.getLista;
     console.log(newLista)
     let chekV= false;
     
     newLista.map((item, index) => {
       if(item.username==this.username){
         if(item.email==this.email){
           console.log(true)
           this.chekV=true;
           this.$store.commit('checkUser',item.username)
        //    this.zipcode=item.zipcode;
        //    console.log(item.address.zipcode)
         }
       }
     });
   }

    public backLogin(){
        this.$router.push('/')
    }
}
</script>

<style scoped lang="scss">
    $color_conectus:#005dad;
    $color_grey: #ecebebcc;
    $gutter: 8px;
    
    .Form{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: auto;
        align-items: center;
        width: 750px;
        
    }
    .Form__button{
        display: flex;
        flex-direction: row;
        width: 750px;
        margin : auto;
        background-color:white;
        margin-top: $gutter*2;
        margin-bottom: $gutter*2;
        padding: $gutter*2;
        border-radius: $gutter/2;
        justify-content: space-between;
        
        .bottone{
            background-color:#d4cececc;
            border-radius: $gutter/2;
            padding: $gutter;
            border-width: inherit;
            height: 31px;
            color:white;
        }
        .Nope__button{
            background-color:$color_conectus;
            border-radius: $gutter/2;
            padding: $gutter;
            border-width: inherit;
            width:78px;
            height: 31px;
            color:white;
        }
    }

</style>