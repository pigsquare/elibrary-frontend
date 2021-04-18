import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';
import {ChangePasswordRequest} from '../../../models/change-password-request';
import {ChangePasswordService} from '../../../services/change-password.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService,
              private router: Router,
              private passwordService: ChangePasswordService,
              public dialog: MatDialog,
              private changePasswordService: ChangePasswordService,
              private snackBar: MatSnackBar,
  ) {
    router.events.subscribe(r => {this.user = new User();
                                  this.user.id = window.localStorage.getItem('user_id');
                                  this.user.username = window.localStorage.getItem('user_name');
                                  this.user.role = window.localStorage.getItem('user_role'); } );
  }
  user: User|null;
  changeRequest: ChangePasswordRequest;

  ngOnInit(): void {
    this.user = new User();
    this.user.id = window.localStorage.getItem('user_id');
    this.user.username = window.localStorage.getItem('user_name');
    this.user.role = window.localStorage.getItem('user_role');
  }

  logout(): void{
    AuthService.destroyToken();
    this.user = null;
  }
  changePassword(): void{
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '250px',
      data: {oldPassword: '', newPassword: ''}
    });

    dialogRef.afterClosed().subscribe(r => {
      console.log(r);
      if (r){
        this.changePasswordService.changeP(r).subscribe(r1 => {
            console.log(r1);
            this.snackBar.open(r1.message, undefined, {duration: 2000});
          },
          () => {
            this.snackBar.open('修改密码失败', undefined, {duration: 2000});
          });
      }
    });
  }

  navToIndex(): void{
    let url = '';
    if (window.localStorage.getItem('user_role') === 'ROLE_READER') {
      url = '/r';
    }
    if (window.localStorage.getItem('user_role') === 'ROLE_STUFF') {
      url = '/t';
    }
    this.router.navigateByUrl(url).then();
  }

}

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.html'
})
export class ChangePasswordDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  oldPassword: string;
  newPassword: string;
}
