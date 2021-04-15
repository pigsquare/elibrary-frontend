import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {ReaderHomeComponent} from './pages/reader-home/reader-home.component';
import {ReaderGuard} from './guard/reader.guard';
import {StaffHomeComponent} from './pages/staff-home/staff-home.component';
import {StaffGuard} from './guard/staff.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'reader', component: ReaderHomeComponent, canActivate: [ReaderGuard], canActivateChild: [ReaderGuard], children: [
      {path: 'test', component: HomepageComponent},
    ]},
  {path: 'staff', component: StaffHomeComponent,
  canActivate: [ReaderGuard, StaffGuard], canActivateChild: [ReaderGuard, StaffGuard], children: [
      {path: '', component: HomepageComponent},
    ]
    },
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
