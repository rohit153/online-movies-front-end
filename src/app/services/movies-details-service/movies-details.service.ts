import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesDetailsService {
  constructor(private http: HttpClient) {}
  // get the movies details
  getMoviesDetails(moviesId: any) {
    return this.http.get('http://localhost:8080/api/v1/movies/' + moviesId);
  }
}
