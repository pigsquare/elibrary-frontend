import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  makeReservation(isbn: string): Observable<CommonResponse>{
    return this.http.post<CommonResponse>(`/api/reservations/books/${isbn}`, undefined);
  }
}
