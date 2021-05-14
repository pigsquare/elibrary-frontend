import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LibraryCardService} from '../../../../services/library-card.service';
import {CommonResponse} from '../../../../models/common-response';
import {LibraryCardRequest} from '../../../../models/user/library-card-request';

@Component({
  selector: 'app-bind-card-dialog',
  templateUrl: './bind-card-dialog.component.html',
  styleUrls: ['./bind-card-dialog.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class BindCardDialogComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private libraryCardService: LibraryCardService
  ) {
    this.telFormGroup = formBuilder.group({
      tel: ['', Validators.pattern('^[1][3-9][0-9]{9}$')]
    });
    this.cardFormGroup = formBuilder.group({
      cardNo: ['', Validators.required]
    });
  }

  telFormGroup: FormGroup;
  cardFormGroup: FormGroup;
  submitRes: CommonResponse;
  ngOnInit(): void {
  }
  onSubmit(): void{
    this.submitRes = new CommonResponse();
    this.submitRes.message = '正在处理中...';
    const req = new LibraryCardRequest();
    req.cardNo = this.cardFormGroup.value.cardNo;
    req.tel = this.telFormGroup.value.tel;
    this.libraryCardService.bindLibraryCard(req).subscribe(r => {
      this.submitRes = r;
    }, () => {
      this.submitRes = new CommonResponse();
      this.submitRes.message = '提交失败，请检查输入与账户状态！';
    });
  }

}
