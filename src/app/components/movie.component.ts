import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  template: `
  <app-movie-details></app-movie-details>
  `
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
