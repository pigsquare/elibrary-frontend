import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalReservationResponse {
  id: number;
  bookName: string;
  author: string;
  publisher: string;
  submitTime: string;
  status: string;
  memo: string;
  lastDate: string;
  isbn: string;
  barcode: string;
}
