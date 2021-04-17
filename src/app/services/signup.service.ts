import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterByTelRequest} from '../models/register-by-tel-request';
import {Observable} from 'rxjs';
import {ValidateByTelRequest} from '../models/validate-by-tel-request';
import {AuthTokenResponse} from '../models/auth-token-response';
import {CommonResponse} from '../models/common-response';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  sendSms(request: RegisterByTelRequest): Observable<CommonResponse>{
    return this.http.post<CommonResponse>('/api/auth/register/tel', request);
  }
  validateTel(request: ValidateByTelRequest): Observable<AuthTokenResponse>{
    return this.http.post<AuthTokenResponse>('/api/auth/validate/tel', request);
  }
}
