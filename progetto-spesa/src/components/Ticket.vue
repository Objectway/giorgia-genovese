<template>
    <div class="ticketVue">
        <div class="ticketVue__TicketForm">
            <p>ADD TICKET'S VALUE</p>
            <div class="ticketVue__TicketFormLabel">
                <p>€</p> 
                <input v-model="amount" type="number"/> 
            </div>
            <div class="ticketVue__TicketFormLabel">
                <p>QUANTITA'</p> 
                <input v-model="quantity" type="number"/> 
            </div> 
            <div class="ticketVue__TicketFormLabel">
                <p> QUANTITA' DI TICKET USATI </p> 
                <input v-model="maxQuantity" type="number"/> 
            </div> 
        </div>
        <div class="buttoClass">
            <button v-on:click="addItem(amount, quantity, maxQuantity, mediaTicket)"> DO MATH STUF </button>
            <button v-on:click="goBack()"> GO BACK </button>
        </div>
         <p >{{$store.state.mediaTicket}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components:{
  }
})
export default class Ticket extends Vue {
    public amount: number=0;
    public quantity: number=0;
    public maxQuantity: number=0;
    public mediaTicket: number=0;
    public itemTicket:any[]=[
     {
       amount:'',
       quantity:'',
       maxQuantity: ''
    }
   ];
   public addItem(amount:number,quantity:number,maxQuantity:number, mediaTicket:number){
     this.itemTicket.push({amount: this.amount,quantity:this.quantity,maxQuantity: this.maxQuantity});
     //return this.itemArray;
     //console.log(this.mediaTicket)
     console.log(quantity)
     this.mediaTicket=this.amount*this.quantity;
     this.$store.commit('changeMedia', this.mediaTicket);
     this.$store.getters.getMediaTicket;
     //console.log(this.$store.state.mediaTicket)
   }
    public goBack(){
        this.$router.push('/');
    }
}


</script>


<style scoped lang="scss">
    .ticketVue{
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        width: 425px;
        border-style: solid;
        border-color: rgb(23, 114, 189);
        padding: 10px;
        .ticketVue__TicketFormLabel{
            display: flex;
            flex-direction: row;
            align-items: center;
        justify-content: space-between;
        }
    }
    button{
    font-family: 'Open Sans', sans-serif;
    width: fit-content;
    }
</style>