import { Component, OnInit } from '@angular/core';
import { HTTPRequestService } from '../services/http-request.service';
import { Movie } from '../class'
import 'rxjs';

@Component({
  selector: 'app-popular-movies',
  template: `
  <section class="popular-movies clearfix">
    <header class="container clearfix">
      <h2>Top Rated Movies</h2>
      <div class="row clearfix">
        <div *ngFor="let movie of movies" class="post">
          <a [routerLink]="['/movie', movie.id]"><img [src]="movie.poster_path" [alt]="movie.title"></a>
          <a [routerLink]="['/movie', movie.id]" class="title"><h3>{{movie.title}}</h3></a>
          <p class="post-info">Ratings: {{movie.vote_average}}</p>
          <p class="post-info">{{movie.release_date}}</p>
        </div>
      </div>
      <div class="row clearfix text-center"><button name="button" class="btn btn-primary" (click)="loadMore();">Load More</button></div>
    </header>
  </section>
`
})
export class TopRatedMoviesComponent implements OnInit {
  movies: Movie[];
  pageNum: number;

  constructor(private _http:HTTPRequestService) { this.movies = new Array(); this.pageNum = 1;}

  ngOnInit() {
    let date: Date;
    let movie: Movie;
    this._http.getTopRatedMovies(this.pageNum)
              .subscribe(
                data => {
                  data.forEach((dataObject) => {
                    movie = dataObject;
                    this._http.formatMovie(movie);
                    this.movies.push(movie);
                  });
                },
                error => console.log(error),
                () => console.log("Finished")
              );
  }

  loadMore() {
    let date: Date;
    let movie: Movie;
    this.pageNum++;
    this._http.getTopRatedMovies(this.pageNum)
              .subscribe(
                data => {
                  data.forEach((dataObject) => {
                    movie = dataObject;
                    this._http.formatMovie(movie);
                    this.movies.push(movie);
                  });
                },
                error => console.log(error),
                () => console.log("Finished")
              );
  }
}
