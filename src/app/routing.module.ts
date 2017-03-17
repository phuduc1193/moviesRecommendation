import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PopularTVShowsComponent } from './popular-tvshows/popular-tvshows.component';
import { WeeklySubscriberComponent } from './weekly-subscriber/weekly-subscriber.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const router = [
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(router) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
