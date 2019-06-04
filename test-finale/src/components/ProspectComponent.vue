<template>
  <div class="Prospect">
      <div class="Prospect__list">
          <h1>Crea Un Nuovo Prospect</h1>
          <p>Per iniziare il censimento del prospect è necessario scegliere la tipologia di cliente </p>
      </div>
      <div class="Prospect__type">
          <h3>Sceglie la tipologia di cliente</h3>
          <div class="Prospect__typeBox">
              <router-link class="routerBack" to="/personafisica">
                <div class="Type__boxElement">
                    <img src="../assets/person.png">
                    <p>Persona fisica</p>
                </div>
              </router-link> 
              <router-link class="routerBack" to="/">
                <div class="Type__boxElement">
                    <img src="../assets/parthenon.png"> 
                    <p>Persona giuridica</p>
                </div>
              </router-link>
          </div>
          <router-view/> 
      </div>
      <div class="Prospect__typeButtom">
          <button class="bottone">ANNULLA</button>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class ProspectComponent extends Vue {}
</script>


<style scoped lang="scss">
$gutter: 8px;
$color_grey: #ecebebcc;
$color_conectus:#005dad;
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
        flex-direction: column;
        width: 750px;
        color: black;
        margin: auto;
        align-items: center;
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
        .bottone{
            background-color:#d4cececc;;
            border-radius: $gutter/2;
            padding: $gutter;
            border-width: inherit;
        }
    }
}
</style>

