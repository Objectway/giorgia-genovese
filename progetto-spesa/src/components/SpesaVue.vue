<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <div class="hello__SpesaForm">
       <p>ADD AN ITEM</p>
       <div class="hello__SpesaFormLabel">
          <input v-model="amount" type="number"/> 
          <p>€</p> 
       </div>
       <div class="hello__SpesaFormLabel">
          <input v-model="quantity" type="number"/> 
          <p>QUANTITA'</p> 
       </div> 
       <div class="hello__SpesaFormLabel">
          <input v-model="nameItem" type="text"/> 
          <p> NOME PRODOTTO </p> 
       </div> 
       <button v-on:click="addItem(amount, quantity, nameItem)"> ADD ITEM TO LIST </button>
     </div>
     <p>TOTALE SPESA: {{totalSpesa}}</p>
     <!-- <div class="hello__listaSpesa" v-for="item in itemArray" :key="item.name">
        <p>{{item.amount}}</p>
        <p>{{item.quantity}}</p>
        <p>{{item.nameItem}}</p>
     </div> -->
     <table id="firstTable">
      <thead>
        <tr>
          <th>AMOUNT</th>
          <th>QUANTITY</th>
          <th>NAME</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in itemArray" :key="row.name">
          <td>{{row.amount}}</td>
          <td>{{row.quantity}}</td>
          <td>{{row.nameItem}}</td>
        </tr>
      </tbody>
    </table>
  </div>
 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components:{
  }
})
export default class SpesaVue extends Vue {
  @Prop() private msg!: string;
   public amount: string='';
   public quantity: string='';
   public nameItem: string='';
   public totalSpesa: number= 0;
   public itemArray:any[]=[
     {
       amount:'',
       quantity:'',
       name: ''
    }
   ]
   public addItem(amount,quantity,nameItem){
     this.itemArray.push({amount: this.amount,quantity:this.quantity,nameItem: this.nameItem});
     //return this.itemArray;
     this.updateTotalSpesa(this.amount);
     console.log(this.itemArray)
   }
   public updateTotalSpesa(itemCosto){
     this.totalSpesa=this.totalSpesa+parseInt(itemCosto);
   }
   
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    
    .hello__SpesaForm{
      display: flex;
      flex-direction: column;
      border-style: solid;
      border-radius: 6px;
      padding: 10px;
      .hello__SpesaFormLabel{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      } 
    }
  }
  // .hello__listaSpesa{
  //     display: flex;
  //     flex-direction: row;
  //   }
  table {
    font-family: 'Open Sans', sans-serif;
    width: 750px;
    border-collapse: collapse;
    border: 3px solid #44475C;
    margin: 10px 10px 0 10px;
    border-radius: 6px;
  }

  table th {
    text-transform: uppercase;
    text-align: left;
    background: rgb(10, 186, 209);
    color: #FFF;
    padding: 8px;
    min-width: 30px;
  }

  table td {
    text-align: left;
    padding: 8px;
    border-right: 2px solid rgb(23, 114, 189);
    
  }
  table td:last-child {
    border-right: none;
  }
  table tbody tr:nth-child(2n) td {
    background: rgb(6, 127, 226);
   
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
