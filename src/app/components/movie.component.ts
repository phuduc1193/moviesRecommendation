import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  template: `
  <app-movie-details></app-movie-details>
  <app-recommended-movies></app-recommended-movies>
  <hr>
  <app-similar-movies></app-similar-movies>
  `
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
