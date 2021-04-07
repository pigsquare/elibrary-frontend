import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChangePasswordRequest} from '../models/change-password-request';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient) { }
  changeP(request: ChangePasswordRequest): Observable<any>{
    return this.http.post('/api/change_password', request);
  }
}
