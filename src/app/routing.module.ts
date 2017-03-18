import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { BannerComponent } from './components/banner.component';
import { PopularMoviesComponent } from './components/popular-movies.component';
import { PopularTVShowsComponent } from './components/popular-tvshows.component';
import { WeeklySubscriberComponent } from './components/weekly-subscriber.component';
import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './components/home.component';
import { PageNotFoundComponent } from './components/not-found.component';
import { MovieComponent } from './components/movie.component';

const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', loadChildren: 'app/modules/movies.module#MoviesModule'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MovieComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MovieRoutingModule { }
