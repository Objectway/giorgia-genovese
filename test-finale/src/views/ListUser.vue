<template>
  <div class="listUser">
    <div class="listUser__header">
      <header-component></header-component>
      <list-component-vue></list-component-vue>
      <input type="text" v-model="search" v-on:keyup="filteredList" placeholder="Cerca Utente"/>
    </div>
    <div class="list" v-for='(item,index) in newLista' v-bind:key="item.id" >
      <div class="list__Credential">
        <img class="imageList" v-if="item.id==newPhoto[index].id" v-bind:src='newPhoto[index].thumbnailUrl'>
        <list-component v-bind:name="item.username"></list-component>
      </div>
      <div>
        <i class="fas fa-chevron-right"></i>
      </div> 
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import '@/components/ListComponent.ts'
import ListComponentVue from '../components/ListComponentVue.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

@Component({
  components:{
    ListComponentVue,
    HeaderComponent
  }
})

export default class ListUser extends Vue {

  public newLista:any[]=[];
  public newPhoto:string='';
  public search:string='';

  /** Nel created() mi scarico la lista degli utenti dallo store.ts
   * e con la chiamata di axios scarico per la prima volta la lista
   * delle foto associate agli user.
   */

  created(){
    debugger
     let lista=this.$store.getters.getLista;
     this.newLista=lista;  
     console.log(this.newLista)  
     this.axios.get('http://jsonplaceholder.typicode.com/photos')
        .then((response)=>{
          this.newPhoto=response.data;
          console.log(this.newPhoto)
        })
  }

  /** filteredList() è un metodo che filtra la lista presa dallo store.ts
   *  il base all'input del box "cerca". Se l'imput è vuoto allora
   *  ritorna tutta la lista.
   */

  filteredList() {
        if(this.search!=''){
          this.newLista=this.newLista.filter(post => {
          return post.username.toLowerCase().includes(this.search.toLowerCase())
        })
        }else{
          this.newLista=this.$store.getters.getLista;
    }
  }
    // filteredList(){
    //   this.newLista=this.$store.getters.getLista;
    //   this.newLista=this.newLista.filter(post => {
    //         return post.username.toLowerCase().includes(this.search.toLowerCase())
    //   })
    // }
}

</script>
<style scoped lang="scss">

$color_conectus:#005dad;
$color_grey: #ecebebcc;
$gutter: 8px;
i{
  margin: $gutter*2;
}
.listUser{
    background-color: $color_grey;
    width: 100%;
    height: 100%;
    text-decoration:none;
    margin-bottom: $gutter;
    display:flex;
    flex-direction:column;
    a:-webkit-any-link {
      color: white;
      cursor: pointer;
      text-decoration: none;
    }
  .list{
    display: flex;
    flex-direction: row;
    width: 750px;
    height: 90px;
    align-items: center;
    margin: auto;
    margin-bottom: $gutter;
    background-color:white;
    justify-content: space-between;
      &__Credential{
        display: flex;
        flex-direction: row;
        align-items: center;
      }
  }
  .imageList{
    border-radius: 76px;
    height: 75px;
    margin: 0 $gutter 0 $gutter;
  }
}
input{
  display: flex;
  width: 750px;
  margin: auto;
  //margin: 0 8px 8px 0;
  margin-bottom: $gutter;
  //border-radius: $gutter/2;
}
</style>
