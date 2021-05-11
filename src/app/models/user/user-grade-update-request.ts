import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserGradeUpdateRequest {
  userId: string;
  gradeId: number;
}
