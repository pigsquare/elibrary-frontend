import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';
import {PersonalReservationResponse} from '../models/reservation/personal-reservation-response';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  makeReservation(isbn: string): Observable<CommonResponse>{
    return this.http.post<CommonResponse>(`/api/reservations/books/${isbn}`, undefined);
  }
  cancelReservation(id: string): Observable<CommonResponse>{
    return this.http.delete<CommonResponse>(`/api/reservations/${id}`);
  }
  getAllReservations(): Observable<PersonalReservationResponse[]>{
    return this.http.get<PersonalReservationResponse[]>('/api/reservations/xxx');
  }
  getCurrentReservations(): Observable<PersonalReservationResponse[]>{
    return this.http.get<PersonalReservationResponse[]>('/api/reservations/xxy');
  }
}
