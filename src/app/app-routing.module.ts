import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {ReaderHomeComponent} from './pages/reader-home/reader-home.component';
import {ReaderGuard} from './guard/reader.guard';
import {StaffHomeComponent} from './pages/staff-home/staff-home.component';
import {StaffGuard} from './guard/staff.guard';
import {AdminHomeComponent} from './pages/admin-home/admin-home.component';
import {AdminGuard} from './guard/admin.guard';
import {StaffManageComponent} from './pages/admin-home/staff-manage/staff-manage.component';
import {ReaderGradeManageComponent} from './pages/admin-home/reader-grade-manage/reader-grade-manage.component';
import {BorrowRecordComponent} from './pages/reader-home/borrow-record/borrow-record.component';
import {RenewBookComponent} from './pages/reader-home/renew-book/renew-book.component';
import {ReserveBookComponent} from './pages/reader-home/reserve-book/reserve-book.component';
import {PersonInfoComponent} from './pages/reader-home/person-info/person-info.component';
import {UserManageComponent} from './pages/staff-home/user-manage/user-manage.component';
import {BookManageComponent} from './pages/staff-home/book-manage/book-manage.component';
import {CreditManageComponent} from './pages/staff-home/credit-manage/credit-manage.component';
import {BorrowManageComponent} from './pages/staff-home/borrow-manage/borrow-manage.component';
import {HoldingManageComponent} from './pages/staff-home/holding-manage/holding-manage.component';
import {SearchBookComponent} from './pages/search-book/search-book.component';
import {BookDetailComponent} from './pages/book-detail/book-detail.component';
import {LibGuideComponent} from './pages/lib-guide/lib-guide.component';
import {ValidateEmailComponent} from './pages/layout/dialog/validate-email/validate-email.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'reader', component: ReaderHomeComponent, canActivate: [ReaderGuard], canActivateChild: [ReaderGuard], children: [
      {path: '', component: HomepageComponent},
      {path: 'record', component: BorrowRecordComponent},
      {path: 'renew', component: RenewBookComponent},
      {path: 'reserve', component: ReserveBookComponent},
      {path: 'info', component: PersonInfoComponent},
    ]},
  {path: 'staff', component: StaffHomeComponent,
  canActivate: [ReaderGuard, StaffGuard], canActivateChild: [ReaderGuard, StaffGuard], children: [
      {path: '', component: HomepageComponent},
      {path: 'user_service', component: UserManageComponent},
      {path: 'book_manage', component: BookManageComponent},
      {path: 'credit', component: CreditManageComponent},
      {path: 'borrow', component: BorrowManageComponent},
      {path: 'holding', component: HoldingManageComponent},
    ]
    },
  {path: 'admin', component: AdminHomeComponent,
  canActivate: [ReaderGuard, AdminGuard], canActivateChild: [ReaderGuard, AdminGuard], children: [
      {path: '', component: HomepageComponent},
      {path: 'staff_manage', component: StaffManageComponent},
      {path: 'reader_grade', component: ReaderGradeManageComponent},
    ]},
  {path: 'search', component: SearchBookComponent},
  {path: 'book/:isbn', component: BookDetailComponent},
  {path: 'guide', component: LibGuideComponent},
  {path: 'verify/:token', component: ValidateEmailComponent},
  {path: '', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
