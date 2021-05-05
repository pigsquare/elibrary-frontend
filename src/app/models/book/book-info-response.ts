import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BookInfoResponse {
  isbn: string;
  name: string;
  author: string;
  publisher: string;
  indexNo: string;
}
