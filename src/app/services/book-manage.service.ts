import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookInfo} from '../models/book/book-info';
import {BookInfoResponse} from '../models/book/book-info-response';

@Injectable({
  providedIn: 'root'
})
export class BookManageService {

  constructor(
    private http: HttpClient
  ) { }

  fetchBookInfo(isbn: string): Observable<BookInfo>{
    return this.http.get<BookInfo>('/api/search/book/info/crawler/' + isbn);
  }

  addBook(req: BookInfo): Observable<object>{
    return this.http.post('/api/book/add', req);
  }
  getBookList(): Observable<BookInfoResponse[]>{
    return this.http.get<BookInfoResponse[]>('/api/book/all');
  }
  delBook(isbn: string): Observable<any>{
    return this.http.delete('/api/book/del/' + isbn);
  }
  updateBook(req: BookInfo): Observable<any>{
    return this.http.post('/api/book/update', req);
  }
  getBook(isbn: string): Observable<BookInfo>{
    return this.http.get<BookInfo>('/api/search/book/info/' + isbn);
  }
}
