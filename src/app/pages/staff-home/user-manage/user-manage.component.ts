import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BindCardDialogComponent} from '../../layout/dialog/bind-card-dialog/bind-card-dialog.component';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  openNewCardDialog(): void{
    this.dialog.open(BindCardDialogComponent, {
      width: '500px',
    });
  }

}
