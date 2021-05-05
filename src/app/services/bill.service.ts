import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }
  getBalance(tel: string): Observable<CommonResponse>{
    return this.http.get<CommonResponse>('/api/bill/balance/' + tel);
  }
}
