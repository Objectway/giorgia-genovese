import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroComponent } from './hero/hero.component';
import { EnableHeroPageGuard } from './hero/enable-hero-page.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: AppComponent
  },
  {
    path:'heroes',
    canActivate: [EnableHeroPageGuard],
    component: HeroComponent
    // loadChildren: './hero/hero.module#HeroModule'

  },
  {
    path:'heroes/:id',
    component: HeroDetailsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
