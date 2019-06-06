import { LitElement, html, customElement, property } from 'lit-element';
@customElement('list-component')
export class ListComponent extends LitElement {

  @property()
    name !: string;
    
  render(){
    
    return html`
      <style>
        p
        {
          margin-top: 0px;
          position: top;
          padding-bottom: 20px;
        }
      </style>

      <div class="Client">
        <div class="Client__persona">
          <p> ${this.name}</p>
        </div>
      </div>
    `;
  }
}