import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private auth: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = AuthService.getToken();
    if (jwtToken != null) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
