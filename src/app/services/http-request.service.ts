import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class HTTPRequestService {
  api_key = 'f31dfbc7b34e22ee64f9437b0f589566';
  language = '&language=en-US';
  movieUrl = 'https://api.themoviedb.org/3/movie/';

  constructor (private _http: Http) { }

  getPopularMovies() {
    return this._http.get(this.movieUrl + 'popular?api_key=' + this.api_key + this.language + '&page=1')
                     .map((res:Response) => res.json().results);
  }

  getMostPopular(id: number) {
    return this._http.get(this.movieUrl + id + '?api_key=' + this.api_key + this.language)
                     .map((res:Response) => res.json());
  }
}
