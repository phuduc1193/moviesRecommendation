import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HTTPRequestService } from '../services/http-request.service';
import { Movie } from '../class'
import 'rxjs';

@Component({
  selector: 'app-similar-movies',
  template: `
  <section class="popular-movies clearfix">
    <header class="container clearfix">
      <h2>Similar Movies</h2>
      <p class="view-more"><a routerLink='/movie/top-rated'>View Top Ratings Movies</a></p>
      <div class="row">
        <div *ngFor="let movie of movies" class="post">
          <a [routerLink]="['/movie', movie.id]"><img [src]="movie.poster_path" [alt]="movie.title"></a>
          <a [routerLink]="['/movie', movie.id]" class="title"><h3>{{movie.title}}</h3></a>
          <p class="post-info">Ratings: {{movie.vote_average}}</p>
          <p class="post-info">{{movie.release_date}}</p>
        </div>
        <div *ngIf="movies.length==0" class="post">No Similar Movie Found</div>
      </div>
    </header>
  </section>
`
})
export class SimilarMoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private _http:HTTPRequestService, private route: ActivatedRoute) { this.movies = new Array(); }

  ngOnInit() {
    let date: Date;
    let movie: Movie;
    this.route.params.switchMap((params: Params) => this._http.getSimilarMovies(+params['id']))
              .subscribe(
                data => {
                  this.movies.length = 0;
                  data = data.splice(0, 6);
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
