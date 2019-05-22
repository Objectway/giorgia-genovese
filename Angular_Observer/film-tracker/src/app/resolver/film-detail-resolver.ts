import{Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filmTrackerService } from '../service/film-tracker.service';
import { Film } from '../models/film';

@Injectable()
export class FilmDetailResolver implements Resolve<any>{
    constructor( private filmTrackerService: filmTrackerService){}
    
    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<any>{
        let filmId= route.params.filmId;
        return this.filmTrackerService.getFilmDetail(filmId);
    }
}