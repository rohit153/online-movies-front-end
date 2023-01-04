import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  baseUrl = 'http://localhost:8080/api/v1/get-user';

  constructor(private http: HttpClient) {}
  getUser() {
    return this.http.get(this.baseUrl);
  }
}
