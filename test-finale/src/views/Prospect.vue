<template>
    <div class="List">
        <div class="List__header">
            <div class="menu">
                <i class="fas fa-bars"></i>
                <p> CONECTUS </p>
            </div>
            <div class="bell">
                <router-link class="routerBack" to="/listUser">Go Back To The List</router-link> 
                <router-view/> 
                <i class="fas fa-bell"></i>
            </div>
        </div>
    <prospect-component></prospect-component>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProspectComponent from '@/components/ProspectComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    ProspectComponent,
  },
})
export default class Prospect extends Vue {
  // public infoLista{
  //   username: string='',
  //   password: string=''
  // } ;
  
}
</script>
<style scoped lang="scss">
$gutter: 8px;
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
        .fa-bars{
            margin: $gutter;
        }
    }
    .bell{
        display:flex;
        margin: $gutter;
        .routerBack{
            display:flex;
            margin: $gutter;
        }
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
.List{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: auto;
    a{
        color: $color_conectus;
        text-decoration:none;
    }
}
</style>
