import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { PageNotFoundComponent } from './components/not-found.component';

const router: Routes = [
  { path: 'movie', loadChildren: 'app/modules/movies.module#MoviesModule' },
  { path: 'show', loadChildren: 'app/modules/shows.module#ShowsModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
