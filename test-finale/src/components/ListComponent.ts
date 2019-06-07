import { LitElement, html, customElement, property } from 'lit-element';
@customElement('list-component')
export class ListComponent extends LitElement {

  @property()
    object !:any;

    
  render(){
    let oggPars=JSON.parse(this.object);
    let user= oggPars.user;
    let photos= oggPars.photos;
    let immagine='';

    photos.forEach(element => {
      if(element.id==user.id){
        console.log(element.thumbnailUrl)
        immagine=element.thumbnailUrl;
      }
    });
    
    return html`
      <style>
      .Client{
        margin-bottom:8px;
        padding:8px;
      }
      .Client__persona{
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: white;
        width: 750px;
        height: 90px;
        align-items: center;
        margin: auto;
        margin-bottom: 8px;
        justify-content: space-between;
      }
      img{
        border-radius: 76px;
        height: 75px;
        margin: 0 8px 0 8px;
      }
      .Client__personaName
      {
        margin-top: 0px;
        position: top;
        padding-bottom: 20px;
      }
      .Client__personaWrap{
        display: flex;
        align-items: center;
      }
      </style>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"> 
   
      <div class="Client">
        <div class="Client__persona">
        <div class="Client__personaWrap">
          <img src="${immagine}">
          <div class="Client__personaName">${user.username}</div>
        </div>
          <div class="Client__personaFreccia"><i class="fas fa-chevron-right"></i></div> 
      </div>
      </div>
    `;
  }
}