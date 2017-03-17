import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-banner></app-banner>
  <app-popular-movies></app-popular-movies>
  <app-popular-tvshows></app-popular-tvshows>
  <app-weekly-subscriber></app-weekly-subscriber>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
