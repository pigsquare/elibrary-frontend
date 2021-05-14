import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BorrowService} from '../../../../services/borrow.service';
import {CommonResponse} from '../../../../models/common-response';

@Component({
  selector: 'app-return-book-dialog',
  templateUrl: './return-book-dialog.component.html',
  styleUrls: ['./return-book-dialog.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ReturnBookDialogComponent implements OnInit {

  bookCodeGroup: FormGroup;
  borrowRes: CommonResponse;

  constructor(
    private formBuilder: FormBuilder,
    private borrowService: BorrowService
  ) {
    this.bookCodeGroup = formBuilder.group({
      bookCode: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this.borrowRes = new CommonResponse();
    this.borrowRes.message = '正在处理中...';
    this.borrowService.returnBook(this.bookCodeGroup.value.bookCode).subscribe(r => {
      this.borrowRes = r;
    }, () => {
      this.borrowRes = new CommonResponse();
      this.borrowRes.message = '还书失败，请检查条码号！';
    });
  }

  clearBook(): void{
    this.bookCodeGroup.reset();
  }
}
