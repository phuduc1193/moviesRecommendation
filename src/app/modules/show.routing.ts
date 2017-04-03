import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from '../components/show.component';
import { TopRatedShowsComponent } from '../components/top-rated.shows.component';

const routes: Routes = [
  { path: '', redirectTo: '/show/top-rated', pathMatch: 'full' },
  { path: 'top-rated', component: TopRatedShowsComponent },
  { path: ':id', component: ShowComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ShowRoutingModule { }
