import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
import { HomeModule } from './modules/home.module';
import { MoviesModule } from './modules/movies.module';
import { ShowsModule } from './modules/shows.module';

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
    HomeModule, MoviesModule, ShowsModule
  ],
  providers: [ GlobalService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
