import { Component, OnInit } from '@angular/core';
import {BookManageService} from '../../../services/book-manage.service';
import {BookInfo} from '../../../models/book/book-info';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BookInfoResponse} from '../../../models/book/book-info-response';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent implements OnInit {

  isbn: string;
  editingInfo: BookInfo;
  bookInfo: BookInfoResponse[];
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
      console.log('success' + r);
      this.matSnackBar.open('添加成功！', undefined, {duration: 2000});
      this.getData();
    },
      () => {
      this.matSnackBar.open('输入信息有误或该书已录入', undefined, {duration: 2000});
      });
    return;
  }

  clearInfo(): void{
    this.editingInfo = new BookInfo();
  }

  editBook(isbn: string): void{
    this.bookManageService.getBook(isbn).subscribe(r => {
      console.log(r);
    });
    return;
  }

  delBook(book: BookInfoResponse): void{
    if (confirm('确认删除《' + book.name + '》吗？')){
      this.bookManageService.delBook(book.isbn).subscribe(() => {
        this.matSnackBar.open('删除成功！', undefined, {duration: 2000});
        this.getData();
      });
    }
  }

}
