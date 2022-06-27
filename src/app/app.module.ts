import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxSpinnerModule } from "ngx-spinner";

import { TreeviewModule } from 'ngx-treeview';
import {MatSelectModule} from '@angular/material/select';

import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { CollapseModule, MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginServices } from '../zsoonServices/loginservices';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';
import { CountdownModule } from 'ngx-countdown';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { Ng2OrderModule } from 'ng2-order-pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import {MatChipsModule} from '@angular/material/chips';
import { ModulesComponent } from './countries/modules/modules.component';


import { SftpComponent } from './module/sftp/sftp.component';

import { ZoomImageComponent } from './validatecertificate/zoom-image/zoom-image.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RegDetailsComponent } from './modules/reg-details/reg-details.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentsComponent } from './modules/appointments/appointments.component';
import { ServicesComponent } from './modules/services/services.component';
import { OtpComponent } from './otp/otp.component';
import { DialogComponent } from './dialog/dialog.component';
import { RouteComponent } from './route/route.component';
import {MatDatepickerModule} from '@angular/material/datepicker';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ChangepasswordComponent,
    ForgotPasswordComponent,
 
    ModulesComponent,


    SftpComponent,
   
    ZoomImageComponent,
   
    DashboardComponent,
   
    RegDetailsComponent,
   
    ProfileComponent,
   
    RegisterComponent,
   
    AppointmentsComponent,
   
    ServicesComponent,
   
    OtpComponent,
   
    DialogComponent,
   
    RouteComponent,
 


  ],
  imports: [
    RouterModule,
    TreeviewModule.forRoot(),
    CountdownModule,
    MatChipsModule,
    MDBBootstrapModule.forRoot(),
    CollapseModule,
    WavesModule,
    BrowserModule,
    RouterModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatTreeModule,
    MatTooltipModule,
    MatStepperModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    ChartsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatRadioModule,
    NgOtpInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    // Ng2OrderModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatDatepickerModule

  ],
  exports:[],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy} ,loginServices,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

