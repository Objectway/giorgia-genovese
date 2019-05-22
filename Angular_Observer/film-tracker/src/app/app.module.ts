import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ButtonComponent } from './button/button.component';
import { FilmDetailResolver } from './resolver/film-detail-resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmDetailComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FilmDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
