import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonResponse {
  code: number;
  message: string;
  args: object;
}
