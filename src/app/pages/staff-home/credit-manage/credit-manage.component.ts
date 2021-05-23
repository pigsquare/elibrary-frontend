import { Component, OnInit } from '@angular/core';
import {BorrowService} from '../../../services/borrow.service';
import {BorrowRecordResponse} from '../../../models/borrow/borrow-record-response';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BillService} from '../../../services/bill.service';
import {UserProfileResponse} from '../../../models/user/user-profile-response';
import {MatDialog} from '@angular/material/dialog';
import {CommonDialogData} from '../../../models/dialog-data/common-dialog-data';
import {CommonInputDialogComponent} from '../../layout/dialog/common-input-dialog/common-input-dialog.component';
import {ScanBarcodeComponent} from '../../layout/dialog/scan-barcode/scan-barcode.component';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-credit-manage',
  templateUrl: './credit-manage.component.html',
  styleUrls: ['./credit-manage.component.scss']
})
export class CreditManageComponent implements OnInit {

  cardNo = '';
  bookName = '';
  userProfile: UserProfileResponse;
  borrowRecordResponses: BorrowRecordResponse[];
  constructor(
    private borrowService: BorrowService,
    private snackBar: MatSnackBar,
    private billService: BillService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  getBorrowingList(): void{
    this.borrowService.getBorrowingListByAdmin(this.cardNo).subscribe(r => {
      this.borrowRecordResponses = r;
      console.log(r);
    }, () => {
      this.snackBar.open('获取数据出现错误', undefined, {duration: 2000});
    });
  }
  getBalance(): void{
    this.billService.getBalance(this.cardNo).subscribe(r => {
      console.log(r);
      this.userProfile = (r.args as UserProfileResponse);

    }, () => {
      this.snackBar.open('获取数据出现错误', undefined, {duration: 2000});
    });
  }
  refreshData(): void{
    this.getBalance();
    this.getBorrowingList();
  }
  recharge(): void{
    const dialogData = new CommonDialogData();
    dialogData.showInfo = '充值金额';
    const dialogRef = this.dialog.open(CommonInputDialogComponent, {
      width: '260px',
      data: dialogData
    });
    let tot: number;
    dialogRef.afterClosed().subscribe(r => {
      if (r && r.resData){
        tot = r.resData as number;
        if (tot > 0){
          const dialogRef2 = this.dialog.open(ScanBarcodeComponent, {
            width: '260px',
            data: new CommonDialogData(),
          });
          dialogRef2.afterClosed().subscribe(dialog2Data => {
            if (dialog2Data && dialog2Data.resData){
              console.log(dialog2Data.resData);
              this.billService.recharge({cardNo: this.cardNo, total: tot, barcode: dialog2Data.resData}).subscribe(rechargeRes => {
                this.snackBar.open(rechargeRes.message, undefined, {duration: 2000});
                this.refreshData();
              }, () => {
                this.snackBar.open('充值失败', undefined, {duration: 2000});
              });
            }
          });
        }
      }
    });
  }
  patOwe(): void{
    const dialogRef2 = this.dialog.open(ScanBarcodeComponent, {
      width: '260px',
      data: new CommonDialogData(),
    });
    dialogRef2.afterClosed().subscribe(dialog2Data => {
      if (dialog2Data && dialog2Data.resData){
        this.billService.payOwe({cardNo: this.cardNo, total: 0, barcode: dialog2Data.resData}).subscribe(rechargeRes => {
          this.snackBar.open(rechargeRes.message, undefined, {duration: 2000});
          this.refreshData();
        }, () => {
          this.snackBar.open('缴费失败', undefined, {duration: 2000});
        });
      }
    });
}
  compensateBook(borrowRecord: BorrowRecordResponse): void{
    this.bookName = borrowRecord.bookName;
    JsBarcode('#barcode', borrowRecord.barcode, {
      width: 1.875,
      height: 60,
    });
    const printContent = document.getElementById('print-content');
    const WindowPrt = window.open('', '', 'left=0,top=0,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
    const dialogRef2 = this.dialog.open(ScanBarcodeComponent, {
      width: '260px',
      data: new CommonDialogData(),
    });
    dialogRef2.afterClosed().subscribe(dialog2Data => {
      if (dialog2Data && dialog2Data.resData){
        this.billService.compensateBook({cardInfo: this.cardNo, barcode: dialog2Data.resData, isCompensateBook: true,
          additionalFee: 0.0, borrowRecordId: borrowRecord.recordId}).subscribe(rechargeRes => {
          this.snackBar.open(rechargeRes.message, undefined, {duration: 2000});
          this.refreshData();
        }, () => {
          this.snackBar.open('缴费失败', undefined, {duration: 2000});
        });
      }
    });
  }

  compensateMoney(recordId: number): void{
    const dialogData = new CommonDialogData();
    dialogData.showInfo = '附加费';
    const dialogRef = this.dialog.open(CommonInputDialogComponent, {
      width: '250px',
      data: dialogData
    });
    let tot: number;
    dialogRef.afterClosed().subscribe(r => {
      if (r && r.resData){
        tot = r.resData as number;
        let additionFee = 0.0;
        if (tot > 0){
          additionFee = tot;
        }
        {
          const dialogRef2 = this.dialog.open(ScanBarcodeComponent, {
            width: '260px',
            data: new CommonDialogData(),
          });
          dialogRef2.afterClosed().subscribe(dialog2Data => {
            if (dialog2Data && dialog2Data.resData){
              this.billService.compensateBook({cardInfo: this.cardNo, barcode: dialog2Data.resData, isCompensateBook: false,
                additionalFee: additionFee, borrowRecordId: recordId}).subscribe(rechargeRes => {
                this.snackBar.open(rechargeRes.message, undefined, {duration: 2000});
                this.refreshData();
              }, () => {
                this.snackBar.open('缴费失败', undefined, {duration: 2000});
              });
            }
          });
        }
      }
    });
  }
}
