<template>
    <div class="insertForm">
        <input type="text" v-model='filmSearch'>
        <button v-on:click="SearchFilm(filmSearch)">search</button>
        <div class="insertForm__Lista" v-for="item in resultFilm" :key="item.imdbID">
            <p>{{item.Title}}</p>
            <img :src="item.Poster" @click="navigateToDetail(item.imdbID)" /> 
            <p>{{item.Year}}</p>
        </div>
    </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import Detail from '../views/Detail.vue';
@Component({
    components:{
        Detail
    },
    })
    
export default class InsertForm extends Vue{
     
    public filmSearch: string='';
    public resultFilm: any[]=[];

    public SearchFilm(filmSearch){
        let endPoint: string='http://www.omdbapi.com/?apikey=51fb3d47&s='+filmSearch;
        
        this.axios.get(endPoint)
        .then((response:any) =>{
            this.resultFilm=response.data.Search;
            console.log(this.resultFilm)
        } )      
    }
    public navigateToDetail(id){

        this.$router.push('/detail/'+id)
    }
    
    
}
</script>
<style lang="scss" scoped>
</style>
