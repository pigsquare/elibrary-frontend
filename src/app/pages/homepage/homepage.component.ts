import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }
  value = 'search';
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  ngOnInit(): void {
  }
  navToIndex(): void{
    let url = '/login';
    if (window.localStorage.getItem('user_role') === 'ROLE_T') {
      url = '/t';
    }
    if (window.localStorage.getItem('user_role') === 'ROLE_S') {
      url = '/s';
    }
    if (window.localStorage.getItem('user_role') === 'ROLE_A') {
      url = '/admin';
    }
    this.router.navigateByUrl(url).then();
  }
  navToLogin(): void{
    this.router.navigateByUrl('/login').then();
  }

}


