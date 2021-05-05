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

  // 获取爬虫爬取的指定图书的信息
  fetchBookInfo(isbn: string): Observable<BookInfo>{
    return this.http.get<BookInfo>('/api/search/crawler/books/' + isbn);
  }

  addBook(req: BookInfo): Observable<object>{
    return this.http.post('/api/books/', req);
  }
  getBookList(): Observable<BookInfoResponse[]>{
    return this.http.get<BookInfoResponse[]>('/api/books/');
  }
  delBook(isbn: string): Observable<any>{
    return this.http.delete('/api/books/' + isbn);
  }
  updateBook(req: BookInfo): Observable<any>{
    return this.http.put('/api/books/', req);
  }
  // 获取数据库保存的指定图书的信息
  getBook(isbn: string): Observable<BookInfo>{
    return this.http.get<BookInfo>('/api/search/books/' + isbn);
  }
}
