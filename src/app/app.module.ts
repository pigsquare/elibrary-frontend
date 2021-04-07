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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ChangePasswordDialogComponent,
    LoginComponent
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
