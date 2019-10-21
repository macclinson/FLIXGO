import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  pageTitle = 'Movie List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  favouritePage = false;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  filteredMovies: IMovie[] = [];
  movies: IMovie[] = [];

  constructor(public router: Router, private movieService: MovieService) {
    if(this.router.url === '/favourites'){
      this.favouritePage = true;
    }
    else{
      this.favouritePage = false;
    }
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Movie List: ' + message;
  }

  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.movieName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: movies => {
        this.movies = movies;
        this.movies.forEach(function(item){

          let retrievedObject = localStorage.getItem('movie'+item.movieId);
          if(retrievedObject){
            let parsedObj = JSON.parse(retrievedObject);
            if(parsedObj.movieId === item.movieId && parsedObj.favourited){
              item.favourite = true;
            }
            else{
              item.favourite = false;
            }
          }
        });
        this.filteredMovies = this.movies;
      },
      error: err => this.errorMessage = err
    });
  }
}
