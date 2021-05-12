import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowRecordResponse{
  recordId: number;
  bookName: string;
  author: string;
  publisher: string;
  barcode: string;
  borrowTime: string;
  lastReturnDate: string;
  extend: boolean;
  returned: boolean;
  returnTime: string;
  lateFee: number;
  memo: string;
}
