<template>
  <div class="List">
    <!-- <div class="List__header">
        <div class="menu">
            <i class="fas fa-bars"></i>
            <p> CONECTUS </p>
        </div>
        <div class="bell">
            <i class="fas fa-bell"></i>
             <router-link class="routerBack" to="/">Go Back To Login</router-link> 
            <router-view/> 
        </div>
    </div> -->
    
    <div class="List__prospect">
        <h1> Elenco Clienti e Prospect</h1>
        <router-link to="/prospect">+ Crea Nuovo Prospect</router-link> 
        <router-view/> 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    component:{
    }
})

export default class ListComponentVue extends Vue {} 
</script>

<style scoped lang="scss">
$gutter: 8px;
$color_conectus:#005dad;
// .List__header{
//     background-color: $color_conectus;
//     width: 100%;
//     height: 100%;
//     text-decoration:none;
//     color: white;
//     display:flex;
//     flex-direction:row;
//     justify-content: space-between;
//     .menu{
//         display:flex;
//         .fa-bars{
//             margin: $gutter;
//         }
//     }
//     .bell{
//         display:flex;
//         margin: 8px;
//         .routerBack{
//             display:flex;
//             margin: $gutter;
//         }
//     }
//       a:-webkit-any-link {
//       color: white;
//       cursor: pointer;
//       text-decoration: none;
//     }
//     i{
//         display:flex;
//         align-items: center;
//     }  
// }
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
