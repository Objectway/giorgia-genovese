import { LitElement, html, customElement, property } from 'lit-element';
@customElement('list-component')
export class ListComponent extends LitElement {
  @property()
   name !: string;
   address!:string;
  render(){
    
    return html`
      <div class="Client">
        <img src=""/>
        <div class="Client__persona">
          <h2> ${this.name}</h2>
          <p>${this.address}</p>
        </div>
      </div>
    `;
  }
}