import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UpdateBookRequest {
  isbn: string;
  name: string;
  author: string;
  publisher: string;
  publishDate: string;
  price: number;
  description: string;
  keywords: string;
  classifyCode: string;
  indexNo: string;
  pageInfo: string;
  imgUrl: string;
}
