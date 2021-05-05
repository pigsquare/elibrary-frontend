import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LibraryCardRequest {
  userId: string;
  gradeId: number;
}
