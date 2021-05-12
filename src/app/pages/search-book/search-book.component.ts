import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookSearchService} from '../../services/book-search.service';
import {BookSearchRequest} from '../../models/book/book-search-request';
import {BookInfoResponse} from '../../models/book/book-info-response';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  selectOpt: number;
  value: string;
  resultList: BookInfoResponse[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookSearchService: BookSearchService,
    private snackBar: MatSnackBar,
    private reservationService: ReservationService,
  ) { }

  ngOnInit(): void {
    this.selectOpt = 4;
    this.value = '';
    this.route.queryParams.subscribe(r => {
      console.log(r);
      this.selectOpt = r.method;
      this.value = r.word;
      if (this.value.length > 0){
        this.searchBook();
      }
    });
  }

  searchBook(): void {
    console.log('search!' + this.value + this.selectOpt);
    const req = new BookSearchRequest();
    req.method = this.selectOpt;
    req.word = this.value;
    this.bookSearchService.searchBook(req).subscribe(r => {
      this.resultList = r;
    });
    return;
  }
  makeReservation(book: BookInfoResponse): void{
    if (confirm(`确定要预约《${book.name}》吗？`)){
      this.reservationService.makeReservation(book.isbn).subscribe(r => {
        this.snackBar.open(r.message, undefined, {duration: 2000});
      }, () => {
        this.snackBar.open('预约失败', undefined, {duration: 2000});
      });
    }
  }
}
