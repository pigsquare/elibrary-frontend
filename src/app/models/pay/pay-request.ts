import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PayRequest {
  barcode: string;
  cardNo: string;
  total: number;
}

