import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HoldingUpdateRequest {
  barcode: string;
  status: string;
}

