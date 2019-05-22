import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { HomeComponent } from './home/home.component';
import { FilmDetailResolver } from './resolver/film-detail-resolver';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: HomeComponent
  },
  {
    path: 'film-detail/:filmId',
    component: FilmDetailComponent,
    resolve:{
      filmDetail:FilmDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
