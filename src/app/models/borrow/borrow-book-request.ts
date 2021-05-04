import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowBookRequest{
  cardNo: string;
  barcode: string;
}
