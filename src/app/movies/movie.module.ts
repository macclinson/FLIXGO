import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailGuard } from './movie-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'movies', component: MovieListComponent },
      {
        path: 'movies/:id',
        canActivate: [MovieDetailGuard],
        component: MovieDetailComponent
      }
    ]),
    SharedModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
  ]
})
export class MovieModule { }
