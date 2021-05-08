import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonDialogData} from '../../../../models/dialog-data/common-dialog-data';

@Component({
  selector: 'app-common-input-dialog',
  templateUrl: './common-input-dialog.component.html',
  styleUrls: ['./common-input-dialog.component.scss']
})
export class CommonInputDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CommonInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommonDialogData
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
