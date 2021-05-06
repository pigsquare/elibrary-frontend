import { Component, OnInit } from '@angular/core';
import {UserProfileResponse} from '../../../models/user/user-profile-response';
import {PersonalInfoService} from '../../../services/personal-info.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  userProfile: UserProfileResponse;
  constructor(private personalInfoService: PersonalInfoService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.personalInfoService.getProfile().subscribe(r => {
      this.userProfile = r;
      console.log(r);
    });
    return;
  }
  updateEmail(): void {
    return;
  }

}
