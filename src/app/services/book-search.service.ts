import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookSearchRequest} from '../models/book/book-search-request';
import {Observable} from 'rxjs';
import {BookInfoResponse} from '../models/book/book-info-response';
import {IsbnInfoResponse} from '../models/book/isbn-info-response';
import {HoldingInfoResponse} from '../models/holding/holding-info-response';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) { }

  searchBook(req: BookSearchRequest): Observable<BookInfoResponse[]>{
    return this.http.post<BookInfoResponse[]>('/api/search/books', req);
  }
  getBookInfo(isbn: string): Observable<IsbnInfoResponse>{
    return this.http.get<IsbnInfoResponse>(`/api/search/books/${isbn}`);
  }
  getBookHoldings(isbn: string): Observable<HoldingInfoResponse[]>{
    return this.http.get<HoldingInfoResponse[]>(`/api/search/books/${isbn}/holdings`);
  }
}
