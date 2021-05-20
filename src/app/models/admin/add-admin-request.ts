import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AddAdminRequest {
  tel: string;
  salary: number;
  title: string;
}
