import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookInfo} from '../models/book-info';

@Injectable({
  providedIn: 'root'
})
export class BookManageService {

  constructor(
    private http: HttpClient
  ) { }

  fetchBookInfo(isbn: string): Observable<BookInfo>{
    return this.http.get<BookInfo>('/api/search/book/info/' + isbn);
  }

  addBook(req: BookInfo): Observable<object>{
    return this.http.post('/api/book/add', req);
  }
}
