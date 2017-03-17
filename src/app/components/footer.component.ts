import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="main-footer">
    <p class="logo" [innerHTML]="theTitle"></p>
    <p class="copyright">&copy; 2017 {{_globals.pageTitle}}. All Rights Reserved.</p>
    <div class="footer-links">
      <a href="#">Terms of Use</a>
      <a href="#">Privacy Policy</a>
    </div>
  </footer>
  `
})
export class FooterComponent implements OnInit {
  theTitle: String;

  constructor(private _globals:GlobalService) {
    let splitTitle: String[];
    splitTitle = _globals.pageTitle.split(' ');
    this.theTitle = splitTitle[0] + '<span>' + splitTitle[1] + '</span>';
  }

  ngOnInit() {
  }

}
