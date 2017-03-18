import { Component, OnInit } from '@angular/core';
import { HTTPRequestService } from '../services/http-request.service';
import 'rxjs';

@Component({
  selector: 'app-popular-movies',
  template: `
  <section class="popular-movies clearfix">
    <header class="container clearfix">
      <h2>Popular Movies</h2>
      <p class="view-more"><a href="/movie/popular?">View Top Ratings Movies</a></p>
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
  <hr>
`
})
export class PopularMoviesComponent implements OnInit {
  constructor(private _http:HTTPRequestService) { }

  ngOnInit() {
    let date: Date;
    this._http.getPopularMovies()
              .subscribe(
                data => {
                  var elements = document.querySelector('.popular-movies').getElementsByClassName('post');
                  data.splice(0, 1);
                  data.forEach((dataObject, index) => {
                    if (index < 6) {
                      var el = elements[index];
                      date = new Date(dataObject.release_date);
                      el.innerHTML = '<a href="/movie/' + dataObject.id + '"><img src="https://image.tmdb.org/t/p/w500' + dataObject.poster_path + '" alt="' + dataObject.title + '"></a>' + '<a href="/movie/' + dataObject.id + '" class="title"><h3>' + dataObject.title + '</h3></a>' + '<p class="post-info">Ratings: ' + dataObject.vote_average + '</p><p class="post-info">' + this.formatDate(date) + '</p>';
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
