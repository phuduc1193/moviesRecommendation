import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  template: `
  <header class="main-header">
    <div class="container">
      <a href=""><h1 class="logo" [innerHTML]="theTitle"></h1></a>

      <a href="#" class="menu" (click)="activeNav = !activeNav"><i class="fa fa-bars"></i></a>
      <nav class="main-nav{{isActive()}}">
        <a href="">Movies</a>
        <a href="">TV Shows</a>
        <a href="">Celebs &amp; Photos</a>
        <a href="">News</a>
      </nav>
    </div>
  </header>
  `,
  host: {
    '(document:click)': 'documentClick($event)'
  }
})
export class HeaderComponent implements OnInit {
  theTitle: String;
  activeNav: boolean;

  constructor(private _globals:GlobalService) {
    let splitTitle: String[];
    splitTitle = _globals.pageTitle.split(' ');
    this.theTitle = splitTitle[0] + '<span>' + splitTitle[1] + '</span>';
    this.activeNav = false;
  }

  ngOnInit() {
  }

  isActive() {
    if (this.activeNav)
      return " active";
    else return "";
  }

  documentClick(event) {
    if (event.target != document.querySelector('i.fa.fa-bars'))
      this.activeNav = false;
  }
}