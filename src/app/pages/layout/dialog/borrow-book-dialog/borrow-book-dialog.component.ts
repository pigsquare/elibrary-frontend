import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {BorrowService} from '../../../../services/borrow.service';
import {BorrowBookRequest} from '../../../../models/borrow/borrow-book-request';
import {CommonResponse} from '../../../../models/common-response';

@Component({
  selector: 'app-borrow-book-dialog',
  templateUrl: './borrow-book-dialog.component.html',
  styleUrls: ['./borrow-book-dialog.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class BorrowBookDialogComponent implements OnInit {

  cardFormGroup: FormGroup;
  bookCodeGroup: FormGroup;
  borrowRes: CommonResponse;
  constructor(
    private formBuilder: FormBuilder,
    private borrowService: BorrowService
  ) {
    this.cardFormGroup = formBuilder.group({
      cardNo: ['', Validators.required]
    });
    this.bookCodeGroup = formBuilder.group({
      bookCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onShowBookInput(): void{
    this.borrowRes = new CommonResponse();
    this.borrowRes.message = '正在处理中...';
    const bookRequest = new BorrowBookRequest();
    bookRequest.barcode = this.bookCodeGroup.value.bookCode;
    bookRequest.cardNo = this.cardFormGroup.value.cardNo;
    if (bookRequest.barcode && bookRequest.cardNo){
      this.borrowService.borrowBook(bookRequest).subscribe(r => {
        this.borrowRes = r;
      }, () => {
        this.borrowRes = new CommonResponse();
        this.borrowRes.message = '借书失败，请检查输入与账户状态！';
      });
    }
  }

  clearBook(): void{
    this.bookCodeGroup.reset();
  }

}
