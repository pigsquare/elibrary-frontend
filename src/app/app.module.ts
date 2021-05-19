import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ChangePasswordDialogComponent, HeaderComponent} from './pages/layout/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from './services/auth.service';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatTreeModule} from '@angular/material/tree';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { SignupComponent } from './pages/signup/signup.component';
import { ReaderHomeComponent } from './pages/reader-home/reader-home.component';
import { StaffHomeComponent } from './pages/staff-home/staff-home.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { StaffManageComponent } from './pages/admin-home/staff-manage/staff-manage.component';
import { ReaderGradeManageComponent } from './pages/admin-home/reader-grade-manage/reader-grade-manage.component';
import { UserManageComponent } from './pages/staff-home/user-manage/user-manage.component';
import { BookManageComponent } from './pages/staff-home/book-manage/book-manage.component';
import { HoldingManageComponent } from './pages/staff-home/holding-manage/holding-manage.component';
import { BorrowManageComponent } from './pages/staff-home/borrow-manage/borrow-manage.component';
import { CreditManageComponent } from './pages/staff-home/credit-manage/credit-manage.component';
import { PersonInfoComponent } from './pages/reader-home/person-info/person-info.component';
import { RenewBookComponent } from './pages/reader-home/renew-book/renew-book.component';
import { ReserveBookComponent } from './pages/reader-home/reserve-book/reserve-book.component';
import { BorrowRecordComponent } from './pages/reader-home/borrow-record/borrow-record.component';
import { SearchBookComponent } from './pages/search-book/search-book.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { LibGuideComponent } from './pages/lib-guide/lib-guide.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { CommonInputDialogComponent } from './pages/layout/dialog/common-input-dialog/common-input-dialog.component';
import {MatStepperModule} from '@angular/material/stepper';
import { BorrowBookDialogComponent } from './pages/layout/dialog/borrow-book-dialog/borrow-book-dialog.component';
import {A11yModule} from '@angular/cdk/a11y';
import { BindCardDialogComponent } from './pages/layout/dialog/bind-card-dialog/bind-card-dialog.component';
import { ReturnBookDialogComponent } from './pages/layout/dialog/return-book-dialog/return-book-dialog.component';
import { ValidateEmailComponent } from './pages/layout/dialog/validate-email/validate-email.component';
import { VocationComponent } from './pages/admin-home/vocation/vocation.component';
import { ReserveShelfComponent } from './pages/admin-home/reserve-shelf/reserve-shelf.component';
import { ScanBarcodeComponent } from './pages/layout/dialog/scan-barcode/scan-barcode.component';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ChangePasswordDialogComponent,
    LoginComponent,
    SignupComponent,
    ReaderHomeComponent,
    StaffHomeComponent,
    AdminHomeComponent,
    StaffManageComponent,
    ReaderGradeManageComponent,
    UserManageComponent,
    BookManageComponent,
    HoldingManageComponent,
    BorrowManageComponent,
    CreditManageComponent,
    PersonInfoComponent,
    RenewBookComponent,
    ReserveBookComponent,
    BorrowRecordComponent,
    SearchBookComponent,
    BookDetailComponent,
    LibGuideComponent,
    FooterComponent,
    CommonInputDialogComponent,
    BorrowBookDialogComponent,
    BindCardDialogComponent,
    ReturnBookDialogComponent,
    ValidateEmailComponent,
    VocationComponent,
    ReserveShelfComponent,
    ScanBarcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    _MatMenuDirectivesModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatDividerModule,
    MatTreeModule,
    MatProgressBarModule,
    MatGridListModule,
    MatStepperModule,
    A11yModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    MatSnackBar,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
