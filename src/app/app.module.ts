import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Router } from '@angular/router';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PopularTVShowsComponent } from './popular-tvshows/popular-tvshows.component';
import { WeeklySubscriberComponent } from './weekly-subscriber/weekly-subscriber.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { Movie, Genre, TVShow, TVSeason } from './class';

import { GlobalService } from './services/global.service';
import { HTTPRequestService } from './services/http-request.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PopularMoviesComponent,
    PopularTVShowsComponent,
    FooterComponent,
    WeeklySubscriberComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RoutingModule
  ],
  providers: [GlobalService, HTTPRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
