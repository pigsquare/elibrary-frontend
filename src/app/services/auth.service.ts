import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthTokenRequest} from '../models/auth-token-request';
import {Observable} from 'rxjs';
import {AuthTokenResponse} from '../models/auth-token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  static getToken(): string | null {
    return window.localStorage.getItem('token');
  }
  static saveToken(token: string): void {
    window.localStorage.setItem('token', token);
  }
  static saveUser(authTokenResponse: AuthTokenResponse): void{
    window.localStorage.setItem('user_role', authTokenResponse.role);
    window.localStorage.setItem('user_id', authTokenResponse.id);
    window.localStorage.setItem('user_name', authTokenResponse.name);
    window.localStorage.setItem('expr', String(authTokenResponse.expiration));
  }
  destroyToken(): void {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_role');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_name');
    window.localStorage.removeItem('expr');
    this.router.navigateByUrl('').then(r => null);
  }

  login(authTokenRequest: AuthTokenRequest): Observable<AuthTokenResponse>{
    console.log('Trying logging in: ' + authTokenRequest);
    return this.http.post<AuthTokenResponse>('/api/auth/login', authTokenRequest);
  }
}
