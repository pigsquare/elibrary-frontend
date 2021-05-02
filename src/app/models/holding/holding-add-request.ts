import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HoldingAddRequest {
  barcode: string;
  isbn: string;
  status: string;
}

