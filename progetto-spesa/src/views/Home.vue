<template>
  <div class="home">
    <div class="home__FormImg">
      <img class="home__img" alt="Vue logo" src="../assets/cart.png">
      <img class="home__img" alt="Vue logo" src="../assets/cart.png">
      <img class="home__img" alt="Vue logo" src="../assets/cart.png">
      <!-- <img class="home__img" alt="Vue logo" src="../assets/cart.png"> -->
       <button v-on:click="navigateToTicket()"> TICKET </button>
    </div> 
    <!-- <button> TICKET </button> -->
    <SpesaVue msg="WELCOME TO THE SHOP APP"/>
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpesaVue from '@/components/SpesaVue.vue'; // @ is an alias to /src
import Ticket from '../components/Ticket.vue'

@Component({
  components: {
    SpesaVue,
    Ticket
  },
})
export default class Home extends Vue {
  public navigateToTicket(){

        this.$router.push('/ticket');
    }
}
</script>

<style lang="scss" scoped>
  button{
    font-family: 'Open Sans', sans-serif;
    width: fit-content;
  }
  .home{
    padding: 10px;
    border-style: solid;
    border-color: rgb(23, 114, 189);
    width: 750px;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column;;
    justify-content: center;
        border-radius: 6px;
    .hello{
      align-items: center;   
      display: flex;
      flex-direction: column;
        font-family: 'Open Sans', sans-serif;
    }
  }
    .home__img{
      height: 150px;
      width: 200px;
    }
</style>

