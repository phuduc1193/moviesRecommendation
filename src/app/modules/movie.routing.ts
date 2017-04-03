import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../components/movie.component';
import { TopRatedMoviesComponent } from '../components/top-rated.movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie/top-rated', pathMatch: 'full' },
  { path: 'top-rated', component: TopRatedMoviesComponent },
  { path: ':id', component: MovieComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class MovieRoutingModule { }
