import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { HTTPRequestService } from '../services/http-request.service';
import { TVShow } from '../class'
import 'rxjs';

@Component({
  selector: 'app-popular-tvshows',
  template: `<section class="popular-tvshows clearfix">
    <header class="container clearfix">
      <h2>Popular TV Shows</h2>
      <p class="view-more"><a href="/tv/top-rated">View Top Ratings Shows</a></p>
      <div class="row">
        <div *ngFor="let show of shows" class="post">
          <a [href]="'/tv/' + show.id"><img [src]="show.poster_path" [alt]="show.name"></a>
          <a [href]="'/tv/' + show.id" class="title"><h3>{{show.name}}</h3></a>
          <p class="post-info">Ratings: {{show.vote_average}}</p>
          <p class="post-info">{{show.release_date}}</p>
        </div>
      </div>
    </header>
  </section>
`
})
export class PopularTVShowsComponent implements OnInit {
  shows: TVShow[];

  constructor(private _http:HTTPRequestService) { this.shows = new Array(); }

  ngOnInit() {
    let date: Date;
    let tvShow: TVShow;
    this._http.getPopularShows()
              .subscribe(
                data => {
                  data.splice(0,1);
                  data = data.splice(0, 6);
                  data.forEach((dataObject) => {
                    tvShow = dataObject;
                    this._http.formatTVShow(tvShow);
                    this.shows.push(tvShow);
                  });
                },
                error => console.log(error),
                () => console.log('Finished')
              );
  }
}
