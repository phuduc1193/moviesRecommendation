import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '(document:click)': 'documentClick($event)'
  }
})
export class HeaderComponent implements OnInit {
  theTitle: String;
  activeNav: boolean;

  constructor(private _globals:GlobalService, private _eref: ElementRef) {
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
