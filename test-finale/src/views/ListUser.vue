<template>
  <div class="listUser">
    <div class="listUser__header">
    <!-- <router-link to="/listUser">Lista Utenti</router-link> -->
      <list-component-vue></list-component-vue>
    </div>
    <div class="img" v-for='itemP in newPhoto'>
      <img src="itemP.thumbnailUrl">
    </div>
    <div class="list" v-for='(item,index) in newLista' >
      
      <list-component v-bind:name="item.username" ></list-component>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import '@/components/ListComponent.ts'
import ListComponentVue from '../components/ListComponentVue.vue'

@Component({
  components:{
    ListComponentVue
  }
})
export default class ListUser extends Vue {
  public newLista:string='';
  public newPhoto:string='';
  created(){
     let lista=this.$store.getters.getLista;
     this.newLista=lista
     console.log(this.newLista)
      
        this.axios.get('http://jsonplaceholder.typicode.com/photos')
        .then((response)=>{
          this.$store.commit('setPhoto',response.data)
        })

    let photo=this.$store.getters.getPhoto;
    this.newPhoto=photo
    console.log(this.newPhoto)
  
  }
}
</script>
<style scoped lang="scss">
$color_conectus:#005dad;
.listUser{
    //background-color: white;
    width: 100%;
    height: 100%;
    text-decoration:none;
    //color: white;
    display:flex;
    flex-direction:column;
      a:-webkit-any-link {
      color: white;
      cursor: pointer;
      text-decoration: none;
  }
    
}
</style>
