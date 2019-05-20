import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  makeObservable(){
    return new RxJs.Observable((observer)=>{
      observer.next();
      observer.complete();
      observer.error();    
    })
  }
}
