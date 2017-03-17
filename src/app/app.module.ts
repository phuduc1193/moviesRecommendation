import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { RoutingModule } from './routing.module';
import { LoadingBarModule, LoadingBarService } from 'ng2-loading-bar';
import { HomeModule } from './modules/home.module';
import { MoviesModule } from './modules/movies.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { PageNotFoundComponent } from './components/not-found.component';

import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    LoadingBarModule,
    HomeModule, MoviesModule
  ],
  providers: [ GlobalService, LoadingBarService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
