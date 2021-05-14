import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryReservationResponse {
  id: number;
  readerName: string;
  bookName: string;
  lastDate: string;
  isbn: string;
  barcode: string;
}
