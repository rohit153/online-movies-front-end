import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:8080/api/v1/auth/login';

  constructor(private http: HttpClient) {}

  // calling login service to generate token

  generateToken(credential: any) {
    // generate token
    console.log('this is credential' + credential);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(`${this.url}`, JSON.stringify(credential), {
      headers: headers,
    });
  }

  // for login user set to local storage

  loginUser(response: any) {
    console.log('this is id' + response);
    localStorage.setItem('token', response.data.jwtToken);
    return true;
  }

  // to check that user is logged in or not
  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  // for logout the user
  logout() {
    localStorage.removeItem('token');
    return true;
  }

  // for getting token
  getToken() {
    return localStorage.getItem('token');
  }
}
