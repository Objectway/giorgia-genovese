<template>
  <div class="List">
    <div class="List__header">
        <div class="menu">
            <i class="fas fa-bars"></i>
            <p> CONECTUS </p>
        </div>
        <div class="bell">
            <i class="fas fa-bell"></i>
        </div>
    </div>
    <div class="List__prospect">
        <h1> Elenco Clienti e Prospect</h1>
        <a href="#">+ Crea Nuovo Prospect</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class ListComponentVue extends Vue {

 

  
} 
</script>

<style scoped lang="scss">
$color_conectus:#005dad;
.List__header{
    background-color: $color_conectus;
    width: 100%;
    height: 100%;
    text-decoration:none;
    color: white;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    .menu{
        display:flex;
    }
    .bell{
        display:flex;
    }
      a:-webkit-any-link {
      color: white;
      cursor: pointer;
      text-decoration: none;
    }
    i{
        display:flex;
        align-items: center;
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
