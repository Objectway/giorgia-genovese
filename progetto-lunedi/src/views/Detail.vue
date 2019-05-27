<template>
  <div class="detail">
    <h1>This is an detail page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Detail extends Vue {
    public detailFilm!:string;
    public idFilm:string='';
  created(){
    this.idFilm=this.$route.params.id;
    console.log(this.idFilm)
    let endPoint: string='http://www.omdbapi.com/?apikey=51fb3d47&i='+this.idFilm;
        
        this.axios.get(endPoint)
        .then((response:any) =>{
            //this.resultFilm=response.data.Search;
            console.log(response)
        } ) 
  }
   
    
}
</script>

