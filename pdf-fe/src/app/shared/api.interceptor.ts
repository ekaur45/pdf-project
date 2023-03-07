import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let user = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")??"{}"):{};
    if(user.token){
      //request.headers.append("authorization",user.token);
      const tokenizedReq = request.clone({ headers: request.headers.set('Authorization', user.token) });
      return next.handle(tokenizedReq);
    }
    return next.handle(request);
  }
}
