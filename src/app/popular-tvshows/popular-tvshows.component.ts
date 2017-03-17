import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { HTTPRequestService } from '../services/http-request.service';
import 'rxjs';

@Component({
  selector: 'app-popular-tvshows',
  templateUrl: './popular-tvshows.component.html'
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
                      el.innerHTML = '<a href="/show/' + dataObject.name + '"><img src="' + this._globals.posterPath + dataObject.poster_path + '" alt="' + dataObject.name + '"></a>' + '<a href="/show/' + dataObject.name + '" class="title"><h3>' + dataObject.name + '</h3></a>' + '<p class="post-info">Ratings: ' + dataObject.vote_average + '</p><p class="post-info">' + this._globals.formatDate(date) + '</p>';
                    }
                  });
                },
                error => console.log(error),
                () => console.log('Finished')
              );
  }

}
