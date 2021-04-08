import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidateByTelRequest {
  tel: string;
  code: string;
  password: string;
}
