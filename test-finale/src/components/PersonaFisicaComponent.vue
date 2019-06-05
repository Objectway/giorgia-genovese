<template>
  <div class="Prospect">
      <div class="Prospect__list">
          <h1>Crea Un Nuovo Prospect</h1>
          <p>Inserisci i dati anagrafici della persona fisica </p>
      </div>
      <div class="Prospect__type">
          <div class="Prospect__typeBox">
              <router-link class="routerBack" to="/personafisica">
                <div class="Type__boxElement">
                    <img src="../assets/person.png">
                    <p>Persona fisica</p>
                </div>
              </router-link> 
          </div>
          <router-view/> 
          <div class="Prospect__Form">
              <div class="Prospect__formBox">
                  <div class="Form">
                    <p class="Form__label">USERNAME</p>
                    <input v-model="username" placeholder="username">
                  </div>
                  <div class="Form">
                    <p class="Form__label">COGNOME</p>
                    <input  v-model="cognome" placeholder="cognome"> 
                  </div> 
              </div>
               <div class="Prospect__formCod">
                    <p class="Form__label">CODICE FISCALE</p>
                    <input id="uppercaseTo" v-model="codicefiscale" placeholder="XXXXXXXXXXXXXXXX">
                </div>
                <div class="Prospect__formDisable"> 
                    <input type="checkbox" id="checkbox" v-model="disableCheck">
                    <label for="checkbox">Persona con disabilità </label>
                </div>
                <p>Informatica ai sensi del decreto</p>
                <p>Il cliente dichiara di aver preso atto di quanto indicato nell'informativa 
                consegnatagli in data odierna e consapevole dei diritti previsti dal decreto 
                legislaativo n.196 del 30/06/2003, presta il suo consenso.</p>
                <div class="Prospect__checkBox">
                    <div>
                        <input type="radio" name="radiocheck" id="checkbox" v-model="checked" v-bind:value="true">
                        <label for="checkbox">Presto il consenso</label>
                    </div>
                    <div>
                        <input type="radio" name="radiocheck" id="checkbox1" v-model="checked" v-bind:value="false">
                        <label for="checkbox1">Nego il consenso</label>
                    </div>
                </div>
          </div>
      </div>
      <div class="Prospect__typeButtom">
          <button class="bottone" @click="backProspect">ANNULLA</button>
          <button class="Agree__button" @click="addUser">AVANTI</button> 
      </div> 
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
  
@Component({})

export default class ProspectComponent extends Vue { 
   
    public username:string='';
    public cognome:string= '';
    public codicefiscale:string='';
    public disableCheck: boolean=false;
    public checked: boolean=false;

    public addUser(){
        console.log(this.checked)
        if(this.checked==true && this.username!='' && this.cognome!='' && this.codicefiscale!=''){
        //let lista=this.$store.getters.getLista;
            let User={
                username:this.username,
                cognome:this.cognome,
                codicefiscale:this.codicefiscale,
                disableCheck:this.disableCheck
            }
            //console.log(User)
            this.$store.commit('addUser',User)
            this.$router.push('listUser')
        }
    }
    public backProspect(){
        this.$router.push('prospect')
    }
}
</script>

<style scoped lang="scss">
$gutter: 8px;
$color_grey: #ecebebcc;
$color_conectus:#005dad;
#uppercaseTo{
    text-transform: uppercase;
}
.Prospect{
    background-color: $color_grey;
    width: 100%;
    height: 100%;
    text-decoration:none;
    color: white;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    p{
        color:#727f8c;
        
    }
    &__list{
        display: flex;
        flex-direction: column;
        width: 750px;
        color: black;
        margin: auto;
    }
    &__type{
        display: flex;
        flex-direction: row;
        width: 750px;
        color: black;
        margin: auto;
    }
    &__typeBox{
        display: flex;
        flex-direction: row;
        width: 750px;
        justify-content: space-evenly;
        .Type__boxElement{
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            width: 270px;
            border-radius: $gutter/2;
            img{
                width: 140px;
            }
        }
    }
    &__formCod{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-right: $gutter*3;
        font-weight: bold;
    }
    &__formDisable{
        margin: 16px 0 0;
    }
    &__Form{
        display: flex;
        flex-direction: column;
        padding: 8px;
        background-color: white;
        width: 150%;
        border-radius: $gutter/2;
        
        p{
            //margin-left: $gutter*3;
        }
        input{
            padding: $gutter;
        }
    }
    &__checkBox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 16px;
    }
    &__formBox{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        
    .Form{
        margin-right: auto;
        
    }
    }
    &__typeButtom{
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
            width:78px;
            height: 31px;
            color:white;
        }
        .Agree__button{
            background-color:$color_conectus;
            border-radius: $gutter/2;
            padding: $gutter;
            border-width: inherit;
            width:78px;
            height: 31px;
            color:white;
        }
    }
}
</style>

