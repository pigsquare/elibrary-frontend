import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LibraryCardRequest} from '../models/user/library-card-request';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';

@Injectable({
  providedIn: 'root'
})
export class LibraryCardService {

  constructor(
    private http: HttpClient,
  ) { }
  bindLibraryCard(req: LibraryCardRequest): Observable<CommonResponse>{
    return this.http.post<CommonResponse>('/api/users/current-user/card', req);
  }
}
