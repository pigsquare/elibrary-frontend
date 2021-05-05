import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookSearchService} from '../../services/book-search.service';
import {BookSearchRequest} from '../../models/book/book-search-request';
import {BookInfoResponse} from '../../models/book/book-info-response';

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
}
