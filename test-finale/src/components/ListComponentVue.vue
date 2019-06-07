<template>
  <div class="List">
    <div class="List__addPersona" v-if="this.consenso!=false"> 
        <p>NUOVO UTENTE AGGIUNTO</p>
    </div>
    <div class="List__prospect">
        <h1> Elenco Clienti e Prospect</h1>
        <router-link to="/prospect">+ Crea Nuovo Prospect</router-link> 
        <router-view/> 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class ListComponentVue extends Vue {

  public consenso:boolean=false;

  /** il created() prende la variabile consenso dallo store 
   * che indica che un nuovo utente è stato aggiunto e nella
   * lista degli utenti fa visualizzare un popUp temporaneo di
   * avvenuto inserimento
   */
  
    created(){
      let newConsenso=this.$store.getters.getAdd;
      this.consenso=newConsenso;
      setTimeout(()=>{
        this.$store.commit('setAdd',false)
        this.consenso=this.$store.getters.getAdd;
        },4000);
    }
//   public hodorFunction(){
//       this.$store.commit('setAdd',false)
//       this.consenso=this.$store.getters.getAdd;
//       console.log(this.consenso)
//   }

} 
</script>

<style scoped lang="scss">
    $gutter: 8px;
    $color_conectus:#005dad;

    .List__addPersona{
        display: flex;
        justify-content: center;
        background-color: #65cc65;
        height: 90px;
        align-items: center;
        button{
            background-color:transparent;
            border-radius: $gutter/2;
            padding: $gutter;
            border-width: inherit;
            width:78px;
            height: 78px;
        }
    }
    .List__prospect{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 750px;
        align-items: center;
        margin: auto;
        a{
            color: $color_conectus;
            text-decoration:none;
        }
    }
    
</style>
