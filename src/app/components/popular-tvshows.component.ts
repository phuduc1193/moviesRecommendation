import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { HTTPRequestService } from '../services/http-request.service';
import 'rxjs';

@Component({
  selector: 'app-popular-tvshows',
  template: `<section class="popular-tvshows clearfix">
    <header class="container clearfix">
      <h2>Popular TV Shows</h2>
      <p class="view-more"><a href="/tv/popular?">View Top Ratings Shows</a></p>
      <div class="row">
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
      </div>
    </header>
  </section>
`
})
export class PopularTVShowsComponent implements OnInit {

  constructor(private _globals: GlobalService, private _http:HTTPRequestService) { }

  ngOnInit() {
    let date: Date;
    this._http.getPopularShows()
              .subscribe(
                data => {
                  data.splice(0,1);
                  var elements = document.querySelector('.popular-tvshows').getElementsByClassName('post');
                  data.forEach((dataObject, index) => {
                    if (index < 6) {
                      var el = elements[index];
                      date = new Date(dataObject.first_air_date);
                      el.innerHTML = '<a href="/show/' + dataObject.id + '"><img src="https://image.tmdb.org/t/p/w500' + dataObject.poster_path + '" alt="' + dataObject.name + '"></a>' + '<a href="/show/' + dataObject.id + '" class="title"><h3>' + dataObject.name + '</h3></a>' + '<p class="post-info">Ratings: ' + dataObject.vote_average + '</p><p class="post-info">' + this.formatDate(date) + '</p>';
                    }
                  });
                },
                error => console.log(error),
                () => console.log('Finished')
              );
  }

  formatDate (d: Date) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
  }
}
