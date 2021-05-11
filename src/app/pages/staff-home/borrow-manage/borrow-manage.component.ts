import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BorrowBookDialogComponent} from '../../layout/dialog/borrow-book-dialog/borrow-book-dialog.component';
import {ReturnBookDialogComponent} from '../../layout/dialog/return-book-dialog/return-book-dialog.component';

@Component({
  selector: 'app-borrow-manage',
  templateUrl: './borrow-manage.component.html',
  styleUrls: ['./borrow-manage.component.scss']
})
export class BorrowManageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  openBorrowDialog(): void{
    this.dialog.open(BorrowBookDialogComponent, {width: '500px'});
  }
  openReturnDialog(): void{
    this.dialog.open(ReturnBookDialogComponent, {width: '500px'});
  }

}
