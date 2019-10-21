import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  pageTitle = 'Movie Detail';
  errorMessage = '';
  movie: IMovie | undefined;
  favourited = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getMovie(id);
    }
    // Retrieve the object from storage
    let retrievedObject = localStorage.getItem('movie'+param);
    if(retrievedObject){
      let parsedObj = JSON.parse(retrievedObject);
      if(parsedObj.movieId === parseInt(param) && parsedObj.favourited){
        this.favourited = true;
      }
      else{
        this.favourited = false;
      }
    }

  }

  getMovie(id: number) {
    this.movieService.getMovie(id).subscribe({
      next: movie => this.movie = movie,
      error: err => this.errorMessage = err
    });
  }

  onFavouriteClicked(id): void {
    let movieObj = { 'movieId': id, 'favourited': true};

    if(this.favourited){
      localStorage.removeItem('movie'+id);
      this.favourited = false;
      this.movie.favourite = false;
      return;
    }

    // Put the object into storage
    localStorage.setItem('movie'+id, JSON.stringify(movieObj));
    this.favourited = true;
    this.movie.favourite = true;
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }
}
