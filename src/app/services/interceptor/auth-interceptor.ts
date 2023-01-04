import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginService } from '../loginservice/login.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newRequest = request;
    let token = this.loginService.getToken();
    console.log('Interceptor', token);

    if (token != null) {
      newRequest = newRequest.clone({
        setHeaders: { Authorization: `${token}` },
      });
    }

    return next.handle(newRequest);
  }
}
