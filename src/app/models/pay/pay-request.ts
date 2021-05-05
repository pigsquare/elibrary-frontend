import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PayRequest {
  barcode: string;
  tel: string;
  total: number;
}

