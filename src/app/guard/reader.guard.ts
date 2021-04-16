import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReaderGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const res = window.localStorage.getItem('token') !== null;
    if (res && (Number(window.localStorage.getItem('expr'))) < Date.now() - 30000){
      this.authService.destroyToken();
      alert('登录已过期，请重新登录！');
      return false;
    }
    if (res && (Number(window.localStorage.getItem('expr'))) < Date.now() - 300000){
        // 获取新token
      console.log('refresh token');
      this.authService.refreshToken(window.localStorage.getItem('token')).subscribe((data) => {
        AuthService.saveToken(data.token);
        AuthService.saveUser(data);
      });
    }

    return res;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
