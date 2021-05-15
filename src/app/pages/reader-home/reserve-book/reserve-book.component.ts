import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ReservationService} from '../../../services/reservation.service';
import {PersonalReservationResponse} from '../../../models/reservation/personal-reservation-response';

@Component({
  selector: 'app-reserve-book',
  templateUrl: './reserve-book.component.html',
  styleUrls: ['./reserve-book.component.scss']
})
export class ReserveBookComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<PersonalReservationResponse>;
  dataSource2: MatTableDataSource<PersonalReservationResponse>;
  displayedColumns: string[] = ['id', 'bookName', 'author', 'publisher',
    'submitTime', 'status', 'barcode', 'lastDate', 'memo', 'option'];
  displayedColumns2: string[] = ['id', 'bookName', 'author', 'publisher',
    'submitTime', 'status', 'barcode', 'lastDate', 'memo'];
  constructor(
    private snackBar: MatSnackBar,
    private reservationService: ReservationService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void{
    this.reservationService.getCurrentReservations().subscribe(r => {
      this.dataSource.data = r;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, () => {
      this.snackBar.open('获取信息出现错误', undefined, {duration: 2000});
    });
    this.reservationService.getAllReservations().subscribe(r => {
      this.dataSource2.data = r;
      this.dataSource2.sort = this.sort;
      this.dataSource2.paginator = this.paginator;
    }, () => {
      this.snackBar.open('获取信息出现错误', undefined, {duration: 2000});
    });
  }

  cancelReservation(reservationResponse: PersonalReservationResponse): void{
    if (confirm(`确定要取消《${reservationResponse.bookName}》的预约吗？`)){
      this.reservationService.cancelReservation(reservationResponse.id.toString()).subscribe(r => {
        this.snackBar.open(r.message, undefined, {duration: 2000});
        this.getData();
      }, () => {
        this.snackBar.open('出现错误', undefined, {duration: 2000});
      });
    }
  }
}
