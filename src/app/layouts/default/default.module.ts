import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ManageuserComponent } from 'src/app/modules/manageuser/manageuser.component';
import { ManageroleComponent } from 'src/app/modules/managerole/managerole.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TreeviewModule } from 'ngx-treeview';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { CollapseModule, MDBBootstrapModule, WavesModule, } from 'angular-bootstrap-md';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';

import { AuthService } from 'src/app/auth.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatChipsModule } from '@angular/material/chips';
import { UserIdleModule } from 'angular-user-idle';
import { CountdownModule } from '@ciri/ngx-countdown';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatPaginatorModule } from '@angular/material/paginator';





@NgModule({
  declarations: [
    DefaultComponent,

    ManageuserComponent,
   
    ManageroleComponent








  ],
  imports: [

    CommonModule,
    FormsModule,
    CountdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TreeviewModule.forRoot(),
    UserIdleModule.forRoot({ idle: 10, timeout: 1800, ping: 1800 }),
    NgMultiSelectDropDownModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    CollapseModule,
    WavesModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatStepperModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatTreeModule,
    NgxSpinnerModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatRadioModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CalendarModule,
    TabViewModule,
    TableModule,
    ToolbarModule,
    NgOtpInputModule,
    MatPaginatorModule



  ],
  providers: [
    AuthService

  ]
})
export class DefaultModule { }
