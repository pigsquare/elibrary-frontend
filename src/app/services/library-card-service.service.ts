import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LibraryCardRequest} from '../models/library-card-request';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';

@Injectable({
  providedIn: 'root'
})
export class LibraryCardServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  submit(req: LibraryCardRequest): Observable<CommonResponse>{
    return this.http.post<CommonResponse>('/api/user/card', req);
  }
}
