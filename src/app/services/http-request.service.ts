import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Movie, TVShow } from '../class';
import 'rxjs';

@Injectable()
export class HTTPRequestService {
  api_key = 'f31dfbc7b34e22ee64f9437b0f589566';
  youtube_key = 'AIzaSyCGo5zGz_fAbg6LFZY9RbIe64vIaR6NVz8';
  language = '&language=en-US';
  URL = 'https://api.themoviedb.org/3/'

  constructor (private _http: Http) { }

  getPopularMovies() {
    return this._http.get(this.URL + 'movie/popular?api_key=' + this.api_key + this.language + '&page=1')
                     .map((res:Response) => res.json().results);
  }

  getPopularShows() {
    return this._http.get(this.URL + 'tv/popular?api_key=' + this.api_key + this.language + '&page=1')
                     .map((res:Response) => res.json().results);
  }

  getSimilarMovies(id: number) {
    return this._http.get(this.URL + 'movie/' + id + '/similar?api_key=' + this.api_key + this.language + '&page=1')
                     .map((res:Response) => res.json().results);
  }

  getRecommendedMovies(id: number) {
    return this._http.get(this.URL + 'movie/' + id + '/recommendations?api_key=' + this.api_key + this.language + '&page=1')
                     .map((res:Response) => res.json().results);
  }

  getTopRatedMovies(pageNum: number = 1) {
    return this._http.get(this.URL + 'movie/top_rated?api_key=' + this.api_key + this.language + '&page=' + pageNum)
                     .map((res:Response) => res.json().results);
  }

  getMovieDetails(id: number) {
    return this._http.get(this.URL + 'movie/' + id + '?api_key=' + this.api_key + this.language + '&append_to_response=videos')
                     .map((res:Response) => res.json());
  }

  getMovieCredits(id: number) {
    return this._http.get(this.URL + 'movie/' + id + '/credits?api_key=' + this.api_key + this.language)
                     .map((res:Response) => res.json());
  }

  getCollectionDetails(id: number) {
    return this._http.get(this.URL + 'collection/' + id + '?api_key=' + this.api_key + this.language)
                     .map((res:Response) => res.json());
  }

  formatMovie(movie: Movie){
    let date: Date;
    if(movie.poster_path)
      movie.poster_path = imagePath + 'w500' + movie.poster_path;
    if(movie.backdrop_path)
      movie.backdrop_path = imagePath + 'w1280' + movie.backdrop_path;
    date = new Date(movie.release_date);
    movie.release_date = formatDate(date);
    if(movie.belongs_to_collection) {
      movie.belongs_to_collection.poster_path = imagePath + 'w500' + movie.belongs_to_collection.poster_path;
      movie.belongs_to_collection.backdrop_path = imagePath + 'w1280' + movie.belongs_to_collection.backdrop_path;
    }
    movie.budget = formatCurrency(movie.budget);
    movie.revenue = formatCurrency(movie.revenue);
    movie.popularity = parseFloat(movie.popularity.toFixed(2));
  }

  formatTVShow(show: TVShow){
    let date: Date;
    if(show.poster_path)
      show.poster_path = imagePath + 'w500' + show.poster_path;
    if(show.backdrop_path)
      show.backdrop_path = imagePath + 'w1280' + show.backdrop_path;
    date = new Date(show.first_air_date);
    show.first_air_date = formatDate(date);
    show.popularity = parseFloat(show.popularity.toFixed(2));
  }
}

let imagePath: string = 'https://image.tmdb.org/t/p/';
function formatDate (d: Date) {
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
}

function formatCurrency(num) {
  if (num > 999999999)
    return (num/1000000000).toFixed(1) + ' B';
  else if (num > 999999)
    return (num/1000000).toFixed(1) + ' M';
  else if (num > 999)
    return (num/1000).toFixed(1) + ' K';
  else return num;
}
