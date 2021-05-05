import { Component, OnInit } from '@angular/core';
import {CommonResponse} from '../../../models/common-response';
import {HoldingService} from '../../../services/holding.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as JsBarcode from 'jsbarcode';
import {HoldingAddRequest} from '../../../models/holding/holding-add-request';
import {BookManageService} from '../../../services/book-manage.service';
import {HoldingUpdateRequest} from '../../../models/holding/holding-update-request';
import {HoldingInfoResponse} from '../../../models/holding/holding-info-response';

@Component({
  selector: 'app-holding-manage',
  templateUrl: './holding-manage.component.html',
  styleUrls: ['./holding-manage.component.scss']
})
export class HoldingManageComponent implements OnInit {
  barcodeRes: CommonResponse;
  getBarcodeInput = '';
  barcode = '';
  status = 'AVAILABLE';
  bookName = '';
  updateBarcode = '';
  updateStatus = '';
  getHoldingIsbn = '';
  holdingInfo: HoldingInfoResponse[];

  constructor(
    private holdingService: HoldingService,
    private snackBar: MatSnackBar,
    private bookManageService: BookManageService,
  ) { }

  ngOnInit(): void {
  }

  getBarcode(): void{
    this.holdingService.getBarcode(this.getBarcodeInput).subscribe(r => {
      this.barcodeRes = r;
      this.barcode = r.message;
      JsBarcode('#barcode', this.barcodeRes.message, {
        width: 1.875,
        height: 60,
      });
      console.log(r);
      this.bookManageService.getBook(this.getBarcodeInput).subscribe(r1 => {
        this.bookName = r1.name;
      });
    }, () => {
      this.snackBar.open('ISBN未录入，请先录入！', undefined, {duration: 3000});
    });
  }
  printBarcode(): void{
    const printContent = document.getElementById('print-content');
    const WindowPrt = window.open('', '', 'left=0,top=0,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
  addHolding(): void{
     const addRequest = new HoldingAddRequest();
     addRequest.barcode = this.barcode;
     addRequest.isbn = this.getBarcodeInput;
     addRequest.status = this.status;
     console.log(addRequest);
     this.holdingService.addHolding(addRequest).subscribe(r => {
       console.log(r);
       this.snackBar.open('录入成功', undefined, {duration: 2000});
     });
  }
  updateHoldingStatus(): void{
    const holdingUpdateRequest = new HoldingUpdateRequest();
    holdingUpdateRequest.barcode = this.updateBarcode;
    holdingUpdateRequest.status = this.updateStatus;
    this.holdingService.updateHoldingStatus(holdingUpdateRequest).subscribe(r => {
      if (r.args){
        this.snackBar.open('更新成功', undefined, {duration: 2000});
      } else{
        this.snackBar.open('更新失败', undefined, {duration: 2000});
      }
    }, () => {
      this.snackBar.open('更新失败', undefined, {duration: 2000});
    });
  }
  getHoldingsByIsbn(): void{
    this.holdingService.getHoldingsByISBN(this.getHoldingIsbn).subscribe(r => {
      this.holdingInfo = r;
    }, () => {
      this.snackBar.open('获取失败', undefined, {duration: 2000});
    });
  }
}
