<template>
    <div class="List">
        <header-component></header-component>
        <prospect-component></prospect-component>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProspectComponent from '@/components/ProspectComponent.vue'; // @ is an alias to /src
import HeaderComponent from '../components/HeaderComponent.vue'

@Component({
  components: {
    ProspectComponent,
    HeaderComponent
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
