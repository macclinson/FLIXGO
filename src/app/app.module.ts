import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MovieModule } from './movies/movie.module';
import { MovieListComponent } from './movies/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'movies', component: MovieListComponent },
      { path: 'favourites', component: MovieListComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      { path: '**', redirectTo: 'movies', pathMatch: 'full' }
    ]),
    MovieModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
