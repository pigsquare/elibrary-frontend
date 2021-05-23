import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';
import {PayRequest} from '../models/pay/pay-request';
import {CompensationRequest} from '../models/pay/compensation-request';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }
  getBalance(tel: string): Observable<CommonResponse>{
    return this.http.get<CommonResponse>('/api/bill/balance/' + tel);
  }
  recharge(req: PayRequest): Observable<CommonResponse>{
    return this.http.post<CommonResponse>('/api/bill/pay/recharge', req);
  }
  payOwe(req: PayRequest): Observable<CommonResponse>{
    return this.http.post<CommonResponse>('/api/bill/pay/balance', req);
  }
  compensateBook(req: CompensationRequest): Observable<CommonResponse>{
    return this.http.post<CommonResponse>('/api/bill/compensations', req);
  }
}
