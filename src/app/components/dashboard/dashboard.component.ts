import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userservice/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private userService: UserServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  public movies: Array<any> = [];

  // initialize available movies list
  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (response: any) => {
        console.log('this is userDetails error ' + response.data);
        this.movies = response.data;
      },
      (error) => {
        console.log('this is userDetails error ' + error);
      }
    );
  }
}
