import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddAdminRequest} from '../models/admin/add-admin-request';
import {Observable} from 'rxjs';
import {AdminInfoResponse} from '../models/admin/admin-info-response';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addAdmin(req: AddAdminRequest): Observable<any>{
    return this.http.post(`/api/admins/`, req);
  }
  updateAdmin(req: AddAdminRequest): Observable<any>{
    return this.http.put(`/api/admins/`, req);
  }
  getAddAdmins(): Observable<AdminInfoResponse[]>{
    return this.http.get<AdminInfoResponse[]>(`/api/admins/`);
  }
  getAdmin(tel: string): Observable<AdminInfoResponse>{
    return this.http.get<AdminInfoResponse>(`/api/admins/${tel}`);
  }
  delAdmin(tel: string): Observable<boolean>{
    return this.http.delete<boolean>(`/api/admins/${tel}`);
  }
}
