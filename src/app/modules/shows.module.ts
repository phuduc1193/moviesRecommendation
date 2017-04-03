import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRoutingModule } from './show.routing';

import { ShowComponent } from '../components/show.component';
import { ShowDetailsComponent } from '../components/show-details.component';
import { TopRatedShowsComponent } from '../components/top-rated.shows.component';

@NgModule({
  imports: [
    CommonModule,
    ShowRoutingModule
  ],
  declarations: [
    ShowComponent,
    ShowDetailsComponent,
    TopRatedShowsComponent
  ]
})
export class ShowsModule { }
