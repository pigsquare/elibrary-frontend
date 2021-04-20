import { Component, OnInit } from '@angular/core';
import {BookManageService} from '../../../services/book-manage.service';
import {BookInfo} from '../../../models/book-info';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent implements OnInit {

  isbn: string;
  editingInfo: BookInfo;
  constructor(
    private bookManageService: BookManageService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.isbn = '';
    this.editingInfo = new BookInfo();
    return;
  }

  autowireBookInfo(): void{
    this.bookManageService.fetchBookInfo(this.isbn).subscribe(r => {
      console.log(r);
      this.editingInfo = r;
    });
  }

  submitBook(): void{
    console.log('submit!');
    this.bookManageService.addBook(this.editingInfo).subscribe(r => {
      console.log('success');
      this.getData();
    });
    return;
  }

  clearInfo(): void{
    this.editingInfo = new BookInfo();
  }

}
