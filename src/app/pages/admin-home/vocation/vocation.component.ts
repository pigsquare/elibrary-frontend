import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BorrowService} from '../../../services/borrow.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vocation',
  templateUrl: './vocation.component.html',
  styleUrls: ['./vocation.component.scss']
})
export class VocationComponent implements OnInit {

  constructor(
    private borrowService: BorrowService,
    private snackBar: MatSnackBar,
  ) { }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log(this.range.value.start.toJSON());
    this.borrowService.delayLastReturnDateForVacation({startTime: this.range.value.start,
      endTime: this.range.value.end}).subscribe(r => {
      this.snackBar.open(`已修改${r.args}条借阅记录`, undefined, {duration: 2000});
      this.range.reset();
    }, () => {
      this.snackBar.open('发生错误', undefined, {duration: 2000});
    });
  }

}
