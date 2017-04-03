import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HTTPRequestService } from '../services/http-request.service';
import { TVShow } from '../class';
import 'rxjs';

@Component({
  selector: 'app-show-details',
  template: `
  <section class="main-banner clearfix">
    <div class="banner-background" [ngStyle]="{ 'background-image': 'url(' + show.backdrop_path + ')'}"></div>
    <div class="banner-wrapper movie-details">
      <div class="banner-featured-poster">
        <a [routerLink]="['/show', show.id]"><img class="featured-image" src="{{ show?.poster_path }}" [alt]="show.name"></a>
      </div>
      <div class="banner-content">
        <h2 class="title"><a [href]="show.homepage" target="_blank">{{show.name}}</a></h2>
        <div class="ratings" [innerHTML]="getRatingStars() + ' ' + show.vote_average + ' <small>(' + show.vote_count + ' votes)</small>'"></div>
        <div class="info">Original Release: {{show.first_air_date}} <span class="separator">|</span> <span href="" class="genre" *ngFor="let genre of show.genres; let last = last"><a [routerLink]="['/genre', genre.id]">{{genre.name}}</a><span *ngIf="!last">,</span> </span></div>
        <p class="description">{{show.overview}}</p>
        <p class="info">Popularity: {{show.popularity}} <span class="separator">|</span> {{show.status}} <span class="separator">|</span> {{show.number_of_seasons}} Season(s)</p>
      </div>
    </div>
  </section>
`
})
export class ShowDetailsComponent implements OnInit {
  show: TVShow;

  constructor(private _http:HTTPRequestService, private route: ActivatedRoute) { this.show = new TVShow; }

  ngOnInit() {
    let date: Date;
    this.route.params.switchMap((params: Params) => this._http.getShowDetails(+params['id']))
                     .subscribe(
                        data => {
                          this.show = data;
                          this._http.formatTVShow(this.show);
                          console.log(this.show);
                        },
                        error => console.log(error),
                        () => console.log("Get Show Details Finished")
                      );
  }

  getRatingStars() {
    let stars: number;
    let inactiveStars: number;
    let output: string;
    output = '';
    stars = this.show.vote_average / 2;
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
