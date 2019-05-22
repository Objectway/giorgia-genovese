import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ switchMap } from 'rxjs/operators';
import { filmTrackerService } from '../service/film-tracker.service';
import { Film } from '../models/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  filmDetail: Film;

  constructor(private router: ActivatedRoute, private filmTrackerService : filmTrackerService, private routern: Router ) { }

  ngOnInit() {
    this.router.data.subscribe((data:any)=>{
      console.log('film details', data.filmDetail);
      this.filmDetail=data.filmDetail;
    })
    // let filmId;
    // this.router.params.pipe(
    //   switchMap((params)=>{
    //   filmId=params.filmId;
    //   return this.filmTrackerService.getFilmDetail(filmId);
    //   })).subscribe((filmDetail: Film)=>{
    //     return this.filmDetail=filmDetail;
    //     console.log(filmDetail)
    //   });
  }
  goBack(){
    this.routern.navigateByUrl('/');
  }
}
