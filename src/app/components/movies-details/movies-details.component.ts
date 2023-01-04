import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDetailsService } from 'src/app/services/movies-details-service/movies-details.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export class MoviesDetailsComponent implements OnInit {
  constructor(
    private moviesDetailService: MoviesDetailsService,
    private activatedRoute: ActivatedRoute
  ) {}

  moviesDetail: any;

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.moviesDetailService.getMoviesDetails(movieId).subscribe(
      (response: any) => {
        console.log('this is userDetails error ' + response.data);
        this.moviesDetail = response.data;
      },
      (error) => {
        console.log('this is userDetails error ' + error);
      }
    );
  }
}
