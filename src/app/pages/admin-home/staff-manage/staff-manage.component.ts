import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {AdminInfoResponse} from '../../../models/admin/admin-info-response';
import {AddAdminRequest} from '../../../models/admin/add-admin-request';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-staff-manage',
  templateUrl: './staff-manage.component.html',
  styleUrls: ['./staff-manage.component.scss']
})
export class StaffManageComponent implements OnInit {

  admins: AdminInfoResponse[];
  addAdminInfo = new AddAdminRequest();
  updateAdminInfo: AddAdminRequest;
  delTel: string;
  openAdd = false;
  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.adminService.getAddAdmins().subscribe(r => {
      this.admins = r;
    });
  }
  onClickEdit(admin: AdminInfoResponse): void{
    this.updateAdminInfo = new AddAdminRequest();
    this.updateAdminInfo.tel = admin.tel.substr(3);
    this.updateAdminInfo.salary = admin.salary;
    this.updateAdminInfo.title = admin.title;
    this.openAdd = true;
  }
  addAdmin(): void{
    this.adminService.addAdmin(this.addAdminInfo).subscribe(r => {
      this.snackBar.open('提交成功', undefined, {duration: 2000});
      this.getData();
    }, () => {
      this.snackBar.open('出现错误', undefined, {duration: 2000});
    });
  }
  updateAdmin(): void{
    this.adminService.updateAdmin(this.updateAdminInfo).subscribe(r => {
      this.snackBar.open('提交成功', undefined, {duration: 2000});
      this.getData();
      this.openAdd = false;
    }, () => {
      this.snackBar.open('出现错误', undefined, {duration: 2000});
    });
  }
  delAdmin(tel: string): void{
    if (confirm('确定要删除该员工吗？')){
      this.adminService.delAdmin(tel).subscribe(r => {
        if (r){
          this.snackBar.open('删除成功', undefined, {duration: 2000});
          this.getData();
        }
      }, () => {
        this.snackBar.open('出现错误', undefined, {duration: 2000});
      });
    }
  }
}
