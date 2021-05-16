import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reader-home',
  templateUrl: './reader-home.component.html',
  styleUrls: ['./reader-home.component.scss']
})
export class ReaderHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navTo(s: string): void{
    this.router.navigateByUrl(s).then();
  }

}
