import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookSearchService} from '../../services/book-search.service';
import {HoldingInfoResponse} from '../../models/holding/holding-info-response';
import {MatSnackBar} from '@angular/material/snack-bar';
import {IsbnInfoResponse} from '../../models/book/isbn-info-response';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  holdings: HoldingInfoResponse[];
  bookInfo = new IsbnInfoResponse();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookSearchService: BookSearchService,
    private reservationService: ReservationService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.bookSearchService.getBookInfo(isbn).subscribe(r => {
      this.bookInfo = r;
    }, () => {
      this.snackBar.open('获取图书信息失败', undefined, {duration: 2000});
    });
    this.bookSearchService.getBookHoldings(isbn).subscribe(r => {
      this.holdings = r;
    }, () => {
      this.snackBar.open('获取馆藏信息失败', undefined, {duration: 2000});
    });
  }

  makeReservation(book: IsbnInfoResponse): void{
    if (confirm(`确定要预约《${book.name}》吗？`)){
      this.reservationService.makeReservation(book.isbn).subscribe(r => {
        this.snackBar.open(r.message, undefined, {duration: 2000});
      }, () => {
        this.snackBar.open('预约失败', undefined, {duration: 2000});
      });
    }
  }
}
