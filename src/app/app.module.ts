import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PopularTVShowsComponent } from './popular-tvshows/popular-tvshows.component';
import { WeeklySubscriberComponent } from './weekly-subscriber/weekly-subscriber.component';
import { FooterComponent } from './footer/footer.component';

import { Movie } from './class/movie';

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
    WeeklySubscriberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [GlobalService, HTTPRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
