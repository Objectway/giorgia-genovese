<template>
  <div class="detail">
    <h1>This is an detail page of {{detailFilm.Title}}</h1>
    <p>{{detailFilm.Plot}}</p>
    <img :src="detailFilm.Poster"/>
    <p>{{detailFilm.Director}}</p>
    <p>{{detailFilm.Genre}}</p>
    <p>{{detailFilm.imdbRating}}</p>
    <p>{{detailFilm.Released}}</p> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Detail extends Vue {
    public detailFilm:string='';
    public idFilm:string='';
  created(){
    this.idFilm=this.$route.params.id;
    console.log(this.idFilm)
    let endPoint: string='http://www.omdbapi.com/?apikey=51fb3d47&i='+this.idFilm;
        
        this.axios.get(endPoint)
        .then((response:any) =>{
            this.detailFilm=response.data;
            console.log(response)
        } ) 
  }
   
    
}
</script>

