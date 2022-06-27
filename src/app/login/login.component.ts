import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { adminstrationServices } from 'src/zsoonServices/adminstration.service';
import { loginServices } from 'src/zsoonServices/loginservices';
import Swal from 'sweetalert2';
import { DialogComponent } from '../dialog/dialog.component';

  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dates:any
  logForm=true
  regForm=false
  loginbtn=true
  login = {
    'email': '',
    'password': ''
  }
  reg = {
    'fullName': '',
    'username':'',
    'phoneNumber': '',
    'email':'',
    'password': '',
    'gender': ''
  }

  radioList:any=[
    {
      name:'male'
    },
    {
      name:'female'
    }
  ]
  constructor(private route: Router, private spinner: NgxSpinnerService, public dialog: MatDialog,private loginSer:loginServices, private datepipe:DatePipe) { }

  ngOnInit(): void {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
  submit(login: any) {
    console.log(login);
  this.loginSer.login(login).subscribe((res:any)=>{
    console.log(res);
    if(res.message=='successfully login'){
      this.route.navigate(['/dashboard'])
    }
    
  })
    // if (login) {
    //   if (login.username == 'rashid@gmail.com' && login.password == '12345') {
    //     this.route.navigate(['/dashboard'])

    //   }
    //   else {
    //     Swal.fire({
    //       title: 'Invalid',
    //       text: 'Mail or password must be corect',
    //       icon: 'error'
    //     })
    //   }
    // }


    if (login.email == '') {
      Swal.fire({
        title: 'Error',
        text: 'Please enter email ',
        icon: 'error'
      })
    }

    if (login.password == '') {
      Swal.fire({
        title: 'Error',
        text: 'Please enter password ',
        icon: 'error'
      })
    }

    if (login.password == '' && login.email == '') {
      Swal.fire({
        title: 'warning',
        text: 'Please enter mail and password ',
        icon: 'warning'
      })
    }


  }
  openDialog(): void {
    if (this.loginbtn == false) {
      this.loginbtn = true;
    } else {
      this.loginbtn = false;
    }
    // const dialogRef = this.dialog.open(DialogComponent, {

    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });


    this.loginbtn=false
  }

  signup(){
    this.regForm=true
    this.logForm=false
    
  }
  Login(){
    this.regForm=false
    this.logForm=true
  }
  radio:any
  toggle(data:any){
    console.log(data);
    
    this.radio=data
      }
 
      date(data:any){
    
       this.dates= this.datepipe.transform(data.target.value, 'dd-MM-yyyy');
    console.log(this.dates);
    
      }
  submitreg(data:any){
console.log(data);
const datatosend = {
  'fullName': data.fullName,
  'username': data.username,
  'phoneNumber': data.phoneNumber,
  'email':data.email,
  'password': data.password,
  'gender': this.radio,
  'dob ': this.dates
}
console.log(datatosend);
this.loginSer.reg(datatosend).subscribe((res:any)=>{
  console.log(res);
  if(res.message='successfully created auth'){
// this.logForm=true
// this.regForm=false
Swal.fire({
  title:'Registered',
  text:'Registered successfully proceed to login',
  icon:'success',
  confirmButtonColor:'#f31760'

}).then((res=>{
  if(res){
  this.regForm=false
  this.logForm=true

  }
}))
  }
  
})
  }


  toggl(data:any){
console.log(data);

  }
 color='red'
}



