import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HTTPRequestService } from '../services/http-request.service';
import { Movie } from '../class';
import 'rxjs';

@Component({
  selector: 'app-movie-details',
  template: `
  <section class="main-banner clearfix">
    <div class="banner-background" [ngStyle]="{ 'background-image': 'url(' + movie.backdrop_path + ')'}"></div>
    <div class="banner-wrapper movie-details">
      <div class="banner-featured-poster">
        <a [href]="'/movie/' + movie.id"><img class="featured-image" [src]="movie.poster_path" [alt]="movie.title"></a>
      </div>
      <div class="banner-content">
        <h2 class="title"><a [href]="movie.homepage">{{movie.title}}</a></h2>
        <div class="ratings" [innerHTML]="getRatingStars() + ' ' + movie.vote_average + ' <small>(' + movie.vote_count + ' votes)</small>'"></div>
        <div class="info">{{movie.runtime}} mins <span class="separator">|</span> <span href="" class="genre" *ngFor="let genre of movie.genres; let last = last"><a href="/genre/{{genre.name}}">{{genre.name}}</a><span *ngIf="!last">,</span> </span><span class="separator">|</span> {{movie.release_date}}</div>
        <q class="tagline">{{movie.tagline}}</q>
        <p class="description">{{movie.overview}}</p>
        <p class="info">Popularity: {{movie.popularity}} <span class="separator">|</span> Budget: {{movie.budget}} <span class="separator">|</span> Revenue: {{movie.revenue}}</p>
        <p class="collection"></p>
      </div>
    </div>
  </section>
`
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(private _http:HTTPRequestService, private route: ActivatedRoute) { this.movie = new Movie; }

  ngOnInit() {
    let date: Date;
    this.route.params.switchMap((params: Params) => this._http.getMovieDetails(+params['id']))
                     .subscribe(
                        data => {
                          this.movie = data;
                          this._http.formatMovie(this.movie);
                          if (this.movie.belongs_to_collection)
                            document.querySelector('.collection').innerHTML = "Belongs to: <a href='collection/" + this.movie.belongs_to_collection.id + "'>" + this.movie.belongs_to_collection.name + "</a>";
                        },
                        error => console.log(error),
                        () => console.log("Finished")
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
