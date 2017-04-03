import { Component, OnInit } from '@angular/core';
import { HTTPRequestService } from '../services/http-request.service';
import { TVShow } from '../class'
import 'rxjs';

@Component({
  selector: 'app-popular-shows',
  template: `
  <section class="popular-movies clearfix">
    <header class="container clearfix">
      <h2>Top Rated Shows</h2>
      <div class="row clearfix">
        <div *ngFor="let show of shows" class="post">
          <a [routerLink]="['/show', show.id]"><img [src]="show.poster_path" [alt]="show.name"></a>
          <a [routerLink]="['/show', show.id]" class="title"><h3>{{show.name}}</h3></a>
          <p class="post-info">Ratings: {{show.vote_average}}</p>
          <p class="post-info">{{show.release_date}}</p>
        </div>
      </div>
      <div class="row clearfix text-center"><button name="button" class="btn btn-primary" (click)="loadMore();">Load More</button></div>
    </header>
  </section>
`
})
export class TopRatedShowsComponent implements OnInit {
  shows: TVShow[];
  pageNum: number;

  constructor(private _http:HTTPRequestService) { this.shows = new Array(); this.pageNum = 1;}

  ngOnInit() {
    let date: Date;
    let show: TVShow;
    this._http.getTopRatedShows(this.pageNum)
              .subscribe(
                data => {
                  data.forEach((dataObject) => {
                    show = dataObject;
                    this._http.formatTVShow(show);
                    this.shows.push(show);
                  });
                },
                error => console.log(error),
                () => console.log("Get Top Rated Show Finished")
              );
  }

  loadMore() {
    let date: Date;
    let show: TVShow;
    this.pageNum++;
    this._http.getTopRatedShows(this.pageNum)
              .subscribe(
                data => {
                  data.forEach((dataObject) => {
                    show = dataObject;
                    this._http.formatTVShow(show);
                    this.shows.push(show);
                  });
                },
                error => console.log(error),
                () => console.log("Get More Rated Show Finished")
              );
  }
}
