<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <counter-button @changeValuta="checkValuta"></counter-button>
    <label-counter :valuta="valuta" ></label-counter>
    <!-- <counter-button @changeCiao="checkCiao"></counter-button>
    <label-counter :saluto="saluto"></label-counter> -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import '../components/LabelCounter.ts';
import '../components/CounterButton.ts';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
   
  public valuta: number=0;
  public saluto: string="ciao";

  checkValuta(data:any){
    console.log(data)
    this.valuta=data.detail;
  }
  
}
</script>
