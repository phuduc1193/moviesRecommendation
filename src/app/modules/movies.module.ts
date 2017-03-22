import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie.routing';

import { MovieComponent } from '../components/movie.component';
import { MovieDetailsComponent } from '../components/movie-details.component';
import { RecommendedMoviesComponent } from '../components/recommended-movies.component';
import { SimilarMoviesComponent } from '../components/similar-movies.component';
import { TopRatedMoviesComponent } from '../components/top-rated.movies.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
    RecommendedMoviesComponent,
    SimilarMoviesComponent,
    TopRatedMoviesComponent
  ]
})
export class MoviesModule { }
