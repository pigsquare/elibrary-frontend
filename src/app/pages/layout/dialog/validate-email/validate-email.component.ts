import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonalInfoService} from '../../../../services/personal-info.service';
import {AuthService} from '../../../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personalInfoService: PersonalInfoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    this.personalInfoService.validateEmail(token).subscribe(r => {
      AuthService.saveToken(r.token);
      AuthService.saveUser(r);
      this.router.navigateByUrl('/reader/info').then(() => this.snackBar.open('邮箱验证成功^_^', undefined, {duration: 2000}));
    }, () => {
      this.router.navigateByUrl('/').then(() => this.snackBar.open('邮箱验证失败', undefined, {duration: 2000}));
    });
  }

}
