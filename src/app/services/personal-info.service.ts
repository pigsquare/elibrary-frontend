import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfileResponse} from '../models/user/user-profile-response';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<UserProfileResponse>{
    return this.http.get<UserProfileResponse>('/api/users/current-user');
  }
}
