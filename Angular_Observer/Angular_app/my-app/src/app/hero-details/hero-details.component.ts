import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero/hero.service';
import { Hero } from '../hero/hero';
import {filter, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  hero:Hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    console.log("details")
    let heroId;
    const obs$= this.route.params.pipe(
      switchMap((params)=>{
        heroId=params.id;
      console.log("params", params);
      return this.heroService.getHero();
    }));
    obs$.subscribe((heroList:Hero[])=>{
      this.hero=heroList.filter((hero)=>hero.id==heroId)[0];
      console.log(this.hero)
    })
  }

}
