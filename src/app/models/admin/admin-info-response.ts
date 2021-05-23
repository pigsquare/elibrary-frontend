import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdminInfoResponse {
  id: number;
  salary: number;
  title: string;
  tel: string;
  name: string;
}
