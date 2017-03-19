import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from '../routing.module';

import { MovieComponent } from '../components/movie.component';
import { MovieDetailsComponent } from '../components/movie-details.component';
import { SimilarMoviesComponent } from '../components/similar-movies.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
    SimilarMoviesComponent
  ]
})
export class MoviesModule { }
