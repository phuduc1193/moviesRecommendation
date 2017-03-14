import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { HTTPRequestService } from '../services/http-request.service';
import { Movie } from '../class/movie';
import 'rxjs';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html'
})
export class PopularMoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private _globals: GlobalService, private _http:HTTPRequestService) { }

  ngOnInit() {
    let date: Date;
    this._http.getPopularMovies()
              .subscribe(
                data => {
                  data.splice(0,1);
                  var elements = document.getElementsByClassName('post');
                  data.forEach((dataObject, index) => {
                    if (index < 6) {
                      var el = elements[index];
                      date = new Date(dataObject.release_date);
                      el.innerHTML = '<a href="/movie/' + dataObject.id + '"><img src="' + this._globals.posterPath + dataObject.poster_path + '" alt="' + dataObject.title + '"></a>' + '<a href="/movie/' + dataObject.id + '" class="title"><h3>' + dataObject.title + '</h3></a>' + '<p class="post-info">Ratings: ' + dataObject.vote_average + '</p><p class="post-info">' + this._globals.formatDate(date) + '</p>';
                      console.log(dataObject);
                      console.log(index);
                    }
                  });
                },
                error => console.log(error),
                () => console.log('Finished')
              );
  }

}
