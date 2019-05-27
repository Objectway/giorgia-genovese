<template>
  <div class="detail">
    <h1>This is an detail page</h1>
    <p v-bind:detailFilm=detailFilm.Plot>{{detailFilm}}</p>
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
}
</script>

