import {
    LitElement, html, customElement, property
  } from 'lit-element';

  @customElement('label-counter')
  export default class LabelCounter extends LitElement {
    @property()
    valuta = 0;

    render(){
      return html`
    <style>
        .prop{

      width: 750px;
        display:flex;
        flex-direction:row;
        justify-content: center;
        color:white;
        background-color: #2c3e50;
        }
    </style>
    <p class="prop">${this.valuta} £ </p>`
    }
    
}