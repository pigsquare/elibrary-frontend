import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {BorrowRecordResponse} from '../../../models/borrow/borrow-record-response';
import {BorrowService} from '../../../services/borrow.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-renew-book',
  templateUrl: './renew-book.component.html',
  styleUrls: ['./renew-book.component.scss']
})
export class RenewBookComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<BorrowRecordResponse>;
  displayedColumns: string[] = ['recordId', 'bookName', 'author', 'publisher',
    'borrowTime', 'lastReturnDate', 'extend', 'lateFee', 'memo', 'renew'];
  constructor(
    private borrowService: BorrowService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void{
    this.borrowService.getBorrowingList().subscribe(r => {
      this.dataSource = new MatTableDataSource<BorrowRecordResponse>(r);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  renewBook(id: string): void{
    this.borrowService.renewBook(id).subscribe(r => {
      this.snackBar.open(r.message, undefined, {duration: 2000});
      this.getData();
    }, () => {
      this.snackBar.open('不能续借', undefined, {duration: 2000});
    });
    return;
  }

}
