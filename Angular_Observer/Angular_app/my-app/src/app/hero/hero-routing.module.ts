import {HeroComponent} from './hero.component'
import { Routes, RouterModule } from '@angular/router';
import {HeroDetailsComponent} from '../hero-details/hero-details.component'
import { NgModule } from '@angular/core';
import { EnableHeroPageGuard } from './enable-hero-page.guard';
const routes: Routes = [
  {
    path:'',
    
    component: HeroComponent
  },
  {
    path:'hero/:id',
    component: HeroDetailsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
