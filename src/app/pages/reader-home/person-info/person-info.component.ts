import { Component, OnInit } from '@angular/core';
import {UserProfileResponse} from '../../../models/user/user-profile-response';
import {PersonalInfoService} from '../../../services/personal-info.service';
import {MatDialog} from '@angular/material/dialog';
import {CommonInputDialogComponent} from '../../layout/dialog/common-input-dialog/common-input-dialog.component';
import {CommonDialogData} from '../../../models/dialog-data/common-dialog-data';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  userProfile: UserProfileResponse;
  constructor(private personalInfoService: PersonalInfoService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.personalInfoService.getProfile().subscribe(r => {
      this.userProfile = r;
      console.log(r);
    });
    return;
  }
  updateEmail(): void {
    const dialogData = new CommonDialogData();
    dialogData.showInfo = '邮箱地址';
    const dialogRef = this.dialog.open(CommonInputDialogComponent, {
      width: '260px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(r => {
      if (r){
        if (r.resData){
          this.personalInfoService.submitEmail(r.resData).subscribe(r1 => {
            this.snackBar.open(r1.message, undefined, {duration: 2000});
            this.getData();
          }, () => {
            this.snackBar.open('提交失败', undefined, {duration: 2000});
          });
        }
      }
    });
    return;
  }
  updateName(): void{
    const dialogData = new CommonDialogData();
    dialogData.showInfo = '姓名';
    const dialogRef = this.dialog.open(CommonInputDialogComponent, {
      width: '250px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(r => {
      if (r){
        if (r.resData){
          this.personalInfoService.updateName(r.resData).subscribe(r1 => {
            if (r1.args){
              this.snackBar.open('提交成功', undefined, {duration: 2000});
              this.getData();
            }else {
              this.snackBar.open('提交失败', undefined, {duration: 2000});
            }
          }, () => {
            this.snackBar.open('提交失败', undefined, {duration: 2000});
          });
        }
      }
    });
  }


}
