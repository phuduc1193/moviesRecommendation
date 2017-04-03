import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BannerComponent } from '../components/banner.component';
import { PopularMoviesComponent } from '../components/popular-movies.component';
import { PopularTVShowsComponent } from '../components/popular-tvshows.component';
import { WeeklySubscriberComponent } from '../components/weekly-subscriber.component';
import { HomeComponent } from '../components/home.component';

import { HTTPRequestService } from '../services/http-request.service';

import { Movie, Genre, TVShow, TVSeason } from '../class';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    JsonpModule
  ],
  declarations: [
    BannerComponent,
    PopularMoviesComponent,
    PopularTVShowsComponent,
    WeeklySubscriberComponent,
    HomeComponent
  ],
  providers: [ HTTPRequestService ]
})
export class HomeModule { }
