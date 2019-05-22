import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroDetailsComponent
  ],
  exports:[
    HeroComponent,
    HeroDetailsComponent
  ],
  providers:[
    HeroService
  ],
  imports: [
    CommonModule,
    
  ]
})
export class HeroModule { }
