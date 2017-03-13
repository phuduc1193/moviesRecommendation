import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  theTitle: String;

  constructor(private _globals:GlobalService) {
    let splitTitle: String[];
    splitTitle = _globals.pageTitle.split(' ');
    this.theTitle = splitTitle[0] + '<span>' + splitTitle[1] + '</span>';
  }

  ngOnInit() {
  }

}
