import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';
import {HttpClient} from '@angular/common/http';
import { FilmResponse } from '../models/film-response';

@Injectable({
  providedIn: 'root'
})
export class filmTrackerService {

    private watchedList: string ='watchedList';
    private wishList: string ='wishList';

  constructor(private httpClient: HttpClient) { }

    getFilmList(filmName): Observable<FilmResponse>{
      return this.httpClient.get<FilmResponse>(`http://www.omdbapi.com/?apikey=51fb3d47&s=${filmName}`);
    }
    addToList(list:string, film:Film){
      let filmList=[];
      const watched=localStorage.getItem(this.watchedList);
      if(!!watched){
        filmList=JSON.parse(watched);
      }
      filmList.push(film);
      localStorage.setItem(list, JSON.stringify(filmList));
      console.log(filmList)
    }
    addFilmToWatchedList(film: Film){
      this.addToList(this.watchedList, film);
    }
    addFilmToWishList(film: Film):void{
      this.addToList(this.wishList, film);
    }
    getFilmDetail(filmId: string): Observable<Film>{
      return this.httpClient.get<Film>(`http://www.omdbapi.com/?apikey=51fb3d47&i=${filmId}`);
    }
  }
