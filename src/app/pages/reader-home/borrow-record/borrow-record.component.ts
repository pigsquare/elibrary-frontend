import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {BorrowRecordResponse} from '../../../models/borrow/borrow-record-response';
import {BorrowService} from '../../../services/borrow.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-borrow-record',
  templateUrl: './borrow-record.component.html',
  styleUrls: ['./borrow-record.component.scss']
})
export class BorrowRecordComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<BorrowRecordResponse>;
  displayedColumns: string[] = ['recordId', 'bookName', 'author', 'publisher',
  'borrowTime', 'lastReturnDate', 'extend', 'returnTime', 'lateFee', 'memo'];
  constructor(
    private borrowService: BorrowService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void{
    this.borrowService.getHistoryList().subscribe(r => {
      this.dataSource = new MatTableDataSource<BorrowRecordResponse>(r);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
