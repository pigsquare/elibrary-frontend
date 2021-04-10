import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChangePasswordRequest} from '../models/change-password-request';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient) { }
  changeP(request: ChangePasswordRequest): Observable<CommonResponse>{
    return this.http.post<CommonResponse>('/api/user/password/change', request);
  }
}
