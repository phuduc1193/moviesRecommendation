import { BrowserModule} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { HTTPRequestService } from '../services/http-request.service';
import { Movie, MovieGenre } from '../class/movie';
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
                  this._http.getMostPopular(this.movie.id)
                            .subscribe(
                              data => {
                                console.log(data);
                                this.movie.title = data.title;
                                date = new Date(data.release_date);
                                this.movie.overview = data.overview;
                                this.movie.release_date = this._globals.formatDate(date);
                                this.movie.vote_average = data.vote_average;
                                this.movie.banner_url = 'https://image.tmdb.org/t/p/w1280' + data.backdrop_path;
                                this.movie.poster_url = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
                              },
                              error => console.log(error),
                              () => console.log("Finished")
                            );
                }
              );

  }
}
