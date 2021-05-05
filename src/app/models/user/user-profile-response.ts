import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResponse{
  balance: number;
  cardNo: string;
  credit: number;
  email: string;
  name: string;
  tel: string;
  username: string;
  grade: string;
  maxHoldings: number;
  maxBorrowTime: number;
  maxReserveTime: number;
}
