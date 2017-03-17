import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { HTTPRequestService } from '../services/http-request.service';
import { Movie } from '../class';
import 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {
  movie: Movie;

  constructor(private _globals: GlobalService, private _http:HTTPRequestService) {
    this.movie = new Movie;
  }

  ngOnInit() {
    let date: Date;
    this._http.getPopularMovies()
              .subscribe(
                data => {
                  this.movie.id = data[0].id;
                },
                error => console.log(error),
                () => {
                  this._http.getMovieDetails(this.movie.id)
                            .subscribe(
                              data => {
                                this.movie.title = data.title;
                                date = new Date(data.release_date);
                                this.movie.release_date = this._globals.formatDate(date);
                                this.movie.overview = data.overview;
                                this.movie.vote_average = data.vote_average;
                                this.movie.banner_url = this._globals.bannerPath + data.backdrop_path;
                                this.movie.poster_url = this._globals.posterPath + data.poster_path;
                                this.movie.homepage_url = data.homepage;
                                this.movie.runtime = data.runtime;
                                this.movie.genres = data.genres;
                              },
                              error => console.log(error),
                              () => console.log("Finished")
                            );
                }
              );
  }

  getRatingStars() {
    let stars: number;
    let inactiveStars: number;
    let output: string;
    output = '';
    stars = this.movie.vote_average / 2;
    stars = Math.round(stars);
    inactiveStars = 5 - stars;
    for (var _i = 0; _i < stars; _i++){
      output += '<i class="fa fa-star"></i>';
    }
    for (var _i = 0; _i < inactiveStars; _i++){
      output += '<i class="fa fa-star inactive"></i>';
    }
    return output;
  }
}
