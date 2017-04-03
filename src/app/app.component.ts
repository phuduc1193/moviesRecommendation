import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  <button (click)="scrollToTop()" id="scrollToTop" title="Go to top"><i class="fa fa-chevron-up"></i></button>
  `
})

export class AppComponent {
  constructor() { }
  @HostListener("window:scroll") scrolling(){
    let scrnH: number = screen.height;
    if (document.body.scrollTop > scrnH/3 || document.documentElement.scrollTop > scrnH/3) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
  }

  scrollToTop() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)
      setTimeout(() => {
        document.body.scrollTop -= document.body.scrollTop/40;
        document.documentElement.scrollTop -= document.documentElement.scrollTop/40;
        this.scrollToTop();
      }, 5);
    else {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}
