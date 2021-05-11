import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfileResponse} from '../models/user/user-profile-response';
import {CommonResponse} from '../models/common-response';
import {MailAddRequest} from '../models/user/mail-add-request';
import {AuthTokenResponse} from '../models/auth/auth-token-response';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<UserProfileResponse>{
    return this.http.get<UserProfileResponse>('/api/users/current-user');
  }
  submitEmail(email: string): Observable<CommonResponse>{
    const mailAddRequest = new MailAddRequest();
    mailAddRequest.email = email;
    return this.http.post<CommonResponse>('/api/users/validation', mailAddRequest);
  }
  updateName(name: string): Observable<CommonResponse>{
    return this.http.patch<CommonResponse>(`/api/users/name/${name}`, undefined);
  }
  validateEmail(token: string): Observable<AuthTokenResponse>{
    return this.http.get<AuthTokenResponse>(`/api/auth/validate/email/${token}`);
  }
}
