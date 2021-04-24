import { Component, OnInit } from '@angular/core';
import {SignupService} from '../../services/signup.service';
import {RegisterByTelRequest} from '../../models/register-by-tel-request';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private requests: RegisterByTelRequest;
  public signupForm: FormGroup;

  constructor(
    private signupService: SignupService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.signupForm = this.formBuilder.group({
      tel: ['', Validators.required],
      code: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  getVerifyCode(): void{
    this.requests = new RegisterByTelRequest();
    this.requests.tel = this.signupForm.value.tel;
    this.signupService.sendSms(this.requests).subscribe(res => {
      // console.log(res.message);
      this.snackBar.open(res.message);
    });
  }
  onSubmit(): void{
    this.signupService.validateTel(this.signupForm.value).subscribe(res => {
      this.snackBar.open('注册: ' + res);
      if (res){
        this.snackBar.open('注册成功');
        AuthService.saveUser(res);
        AuthService.saveToken(res.token);
        this.router.navigateByUrl('/').then();
      }
    },
      error => {
        this.snackBar.open('手机号码或验证码有误');
      });
  }

}
