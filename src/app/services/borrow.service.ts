import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BorrowBookRequest} from '../models/borrow/borrow-book-request';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';
import {BorrowRecordResponse} from '../models/borrow/borrow-record-response';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  constructor(private http: HttpClient) { }
  borrowBook(request: BorrowBookRequest): Observable<CommonResponse>{
    return this.http.post<CommonResponse>('/api/borrow-records/', request);
  }
  returnBook(barcode: string): Observable<CommonResponse>{
    return this.http.patch<CommonResponse>(`/api/borrow-records/holdings/${barcode}/return`, undefined);
  }
  getHistoryList(): Observable<BorrowRecordResponse[]>{
    return this.http.get<BorrowRecordResponse[]>('/api/borrow-records/');
  }
  getBorrowingList(): Observable<BorrowRecordResponse[]>{
    return this.http.get<BorrowRecordResponse[]>('/api/borrow-records/borrowings');
  }
  renewBook(id: string): Observable<CommonResponse>{
    return this.http.patch<CommonResponse>(`/api/borrow-records/${id}/renew`, undefined);
  }
  getBorrowingListByAdmin(card: string): Observable<BorrowRecordResponse[]>{
    return this.http.get<BorrowRecordResponse[]>(`/api/borrow-records/users/${card}`);
  }
}
