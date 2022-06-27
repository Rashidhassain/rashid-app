import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { loginServices } from 'src/zsoonServices/loginservices';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  reg = {
    'fullName': '',
    'username':'',
    'phoneNumber': '',
    'email':'',
    'password': '',
    'gender':''
  }
    constructor(private route: Router,private spinner: NgxSpinnerService) { }
  
    ngOnInit(): void {
  
      this.spinner.show();
  
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);  }
    submit(reg:any){
      console.log(reg);
      // if(login.username=='rashid@gmail.com' && login.password=='12345'){
      //   this.route.navigate(['/dashboard'])
  
      // }
  // else{
  //   Swal.fire({
  //     title: 'Invalid',
  //     text: 'Please enter valid   credentials',
  //     icon:'error'
  //   })
  // }
  
    }
}
