import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from '../routing.module';

import { MovieComponent } from '../components/movie.component';
import { MovieDetailsComponent } from '../components/movie-details.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieComponent,
    MovieDetailsComponent
  ]
})
export class MoviesModule { }
