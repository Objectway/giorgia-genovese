import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHero(){
    return new Observable((observer)=>{
      observer.next([
        {
          id:1,
          name:'mario'} ,
          {
            id:2,
            name:'maria'}   
      ]);
      observer.complete();
    });
  }
}
