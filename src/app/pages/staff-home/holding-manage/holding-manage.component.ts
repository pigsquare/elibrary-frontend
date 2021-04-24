import { Component, OnInit } from '@angular/core';
import {CommonResponse} from '../../../models/common-response';
import {HoldingService} from '../../../services/holding.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as JsBarcode from 'jsbarcode';
import {HoldingAddRequest} from '../../../models/holding-add-request';

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

  constructor(
    private holdingService: HoldingService,
    private snackBar: MatSnackBar
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
      const printContent = document.getElementById('print-content');
      const WindowPrt = window.open('', '', 'left=0,top=0,toolbar=0,scrollbars=0,status=0');
      WindowPrt.document.write(printContent.innerHTML);
      WindowPrt.focus();
      WindowPrt.print();
      WindowPrt.close();
    }, () => {
      this.snackBar.open('ISBN未录入，请先录入！', undefined, {duration: 3000});
    });
  }
  addHolding(): void{
     const addRequest = new HoldingAddRequest();
     addRequest.barcode = this.barcode;
     addRequest.isbn = this.getBarcodeInput;
     addRequest.status = this.status;
     console.log(addRequest);
     this.holdingService.addHolding(addRequest).subscribe(r => {
       console.log(r);
     });
  }
}
