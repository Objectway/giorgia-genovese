import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeroComponent } from './hero/hero.component';
import { HeroModule } from './hero/hero.module';
import { AppHighlightDirective } from './app-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
