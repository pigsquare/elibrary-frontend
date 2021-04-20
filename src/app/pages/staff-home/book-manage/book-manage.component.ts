import { Component, OnInit } from '@angular/core';
import {BookManageService} from '../../../services/book-manage.service';
import {BookInfo} from '../../../models/book-info';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent implements OnInit {

  isbn: string;
  editingInfo: BookInfo;
  bookInfo: object;
  constructor(
    private bookManageService: BookManageService,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.isbn = '';
    this.editingInfo = new BookInfo();
    this.bookManageService.getBookList().subscribe(r => {
      this.bookInfo = r;
    });
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
      this.matSnackBar.open('添加成功！', undefined, {duration: 2000});
      this.getData();
    });
    return;
  }

  clearInfo(): void{
    this.editingInfo = new BookInfo();
  }

}
