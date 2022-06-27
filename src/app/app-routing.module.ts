import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';


import { ManageroleComponent } from './modules/managerole/managerole.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { path } from 'd3-path';


import { SftpComponent } from './module/sftp/sftp.component';
import { ManageuserComponent } from './modules/manageuser/manageuser.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RegDetailsComponent } from './modules/reg-details/reg-details.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentsComponent } from './modules/appointments/appointments.component';
import { ServicesComponent } from './modules/services/services.component';
import { OtpComponent } from './otp/otp.component';
import { RouteComponent } from './route/route.component';





const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: DefaultComponent,
      // canActivate: [AuthGuard],

    children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
     {
       path:'user',
       component:ManageuserComponent
     },
     {
      path:'reg-details',
      component:RegDetailsComponent
    },
    {
      path:'profile',
      component:ProfileComponent
    },
    {
      path:'appointments',
      component:AppointmentsComponent
    },
    {
      path:'services',
      component:ServicesComponent,
    }
    


     

   


   

     

  
     
    ],

  },
  {path:'route', component:RouteComponent},

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'otp',
    component: OtpComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
 

  {
    path: 'changepassword',
    component: ChangepasswordComponent,
  },
  { path: 'default', component: DefaultComponent },



  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
