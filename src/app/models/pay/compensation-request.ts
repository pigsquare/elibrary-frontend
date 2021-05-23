import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CompensationRequest {
  barcode: string;
  cardInfo: string;
  borrowRecordId: number;
  additionalFee: number;
  isCompensateBook: boolean;
}

