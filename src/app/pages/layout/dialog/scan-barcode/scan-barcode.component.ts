import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonDialogData} from '../../../../models/dialog-data/common-dialog-data';

@Component({
  selector: 'app-scan-barcode',
  templateUrl: './scan-barcode.component.html',
  styleUrls: ['./scan-barcode.component.scss']
})
export class ScanBarcodeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ScanBarcodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommonDialogData
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
