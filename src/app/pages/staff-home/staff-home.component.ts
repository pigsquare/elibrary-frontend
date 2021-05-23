import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.scss']
})
export class StaffHomeComponent implements OnInit {
  showFiller = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navTo(s: string): void{
    this.router.navigateByUrl(s).then();
  }

}
