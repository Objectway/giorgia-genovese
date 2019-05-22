import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../models/film';
import {filmTrackerService} from '../service/film-tracker.service'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() film: Film;
  @Input() disableDetailsButton:boolean;

  constructor(private filmTrackerService: filmTrackerService, private router: Router) { }

  ngOnInit() {
  }
  addFilmToWatchedList(){
    this.filmTrackerService.addFilmToWatchedList(this.film);
  }
  addFilmToWishList(){
    this.filmTrackerService.addFilmToWishList(this.film);
  }
  goToDetails(){
    this.router.navigate(['film-detail', this.film.imdbID])
  }
}
