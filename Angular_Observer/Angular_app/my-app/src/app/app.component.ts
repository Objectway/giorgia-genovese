import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  heroName='ciccio';
  enableParagraph=true;
  kickHero(){
    console.log("ciaone");
  }
  customEventCallback(playload:string){
    console.log(playload)
    this.enableParagraph=!this.enableParagraph;
  }
}
