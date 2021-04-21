import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BookSearchRequest {
  method: number;
  word: string;
}
