import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';
import {HoldingAddRequest} from '../models/holding/holding-add-request';
import {HoldingUpdateRequest} from '../models/holding/holding-update-request';

@Injectable({
  providedIn: 'root'
})
export class HoldingService {

  constructor(private http: HttpClient) { }
  getBarcode(isbn: string): Observable<CommonResponse>{
    return this.http.get<CommonResponse>('/api/holdings/barcode/' + isbn);
  }
  addHolding(req: HoldingAddRequest): Observable<object>{
    return this.http.post('/api/holdings/', req);
  }
  updateHoldingStatus(req: HoldingUpdateRequest): Observable<CommonResponse>{
    return this.http.patch<CommonResponse>('/api/holdings/' + req.barcode, req);
  }
}
