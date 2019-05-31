import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('counter-button')
export default class CounterButton extends LitElement {
  
  @property()
   valuta : number=0;
  render(){

    return html`
    <style >
    .bottone{
      width: 750px;
      display:flex;
      flex-direction:row;
      justify-content: center;
      background-color: #42b983;
    }
    </style>
    <div class="bottone">
      <button @click=${this.clickHandlerAdd}> + </button>
      <p >${this.valuta}</p>
      <p></p>
      <button @click=${this.clickHandlerMin}> - </button>
    </div>
    <label-counter valuta="${this.valuta}"></label-counter>`;
  }
  addValuta(){   
      var evt = new CustomEvent('changeValuta', { detail: this.valuta }); 
      this.dispatchEvent(evt);
  }
  clickHandlerAdd(event:any) {
    //console.log(event.target);
    this.valuta=this.valuta+1;
    this.addValuta();
  }
  clickHandlerMin(event:any) {
    //console.log(event.target);
    if(this.valuta==0){
      this.valuta=this.valuta;
    }else{
      this.valuta=this.valuta-1;
    }
    
    this.addValuta();
  }
}