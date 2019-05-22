import { Component, OnInit } from '@angular/core';
import { filmTrackerService } from '../service/film-tracker.service';
import { Film } from '../models/film';
import { FilmResponse } from '../models/film-response';
import { Router } from '@angular/router';
import { FilmDetailComponent } from '../film-detail/film-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filmName:string;
  filmList:Film[];

  constructor(private filmTrackerService: filmTrackerService, private router: Router) { }

  ngOnInit() {
  }

  searchFilm(){
    this.filmTrackerService.getFilmList(this.filmName).subscribe(
      (response: FilmResponse)=>{
        this.filmList=response.Search;
        console.log(this.filmList)
    }); 
  }
  addFilmToWatchedList(film:Film){
    this.filmTrackerService.addFilmToWatchedList(film);
  }
  addFilmToWishList(film:Film){
    this.filmTrackerService.addFilmToWishList(film);
  }
  goToDetails(filmId: string){
    this.router.navigate(['film-detail', filmId])
  }
}
