<template>
  <div class="listUser">
    <div class="listUser__header">
      <header-component></header-component>
      <list-component-vue></list-component-vue>
    </div>
    <div class="list" v-for='(item,index) in newLista' >
      <img class="imageList" v-if="item.id==newPhoto[index].id" v-bind:src='newPhoto[index].thumbnailUrl'>
      <list-component v-bind:name="item.username" ></list-component>
      <div><i class="fas fa-chevron-right"></i></div>
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
  public newLista:string='';
  public newPhoto:string='';
  created(){
     let lista=this.$store.getters.getLista;
     this.newLista=lista;    
        this.axios.get('http://jsonplaceholder.typicode.com/photos')
        .then((response)=>{
          //this.$store.commit('setPhoto',response.data.thumbnailUrl)
          this.newPhoto=response.data;
        })
  }
}
</script>
<style scoped lang="scss">
$color_conectus:#005dad;
$color_grey: #ecebebcc;
$gutter: 8px;
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
  }
  .imageList{
    border-radius: 76px;
    height: 75px;
    margin: 0 8px 0 8px;
  }
}
</style>
