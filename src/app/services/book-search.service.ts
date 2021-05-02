import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookSearchRequest} from '../models/book/book-search-request';
import {Observable} from 'rxjs';
import {BookInfoResponse} from '../models/book/book-info-response';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) { }

  searchBook(req: BookSearchRequest): Observable<BookInfoResponse[]>{
    return this.http.post<BookInfoResponse[]>('/api/search/book/list', req);
  }
}
