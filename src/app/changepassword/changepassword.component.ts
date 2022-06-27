import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { loginServices } from '../../zsoonServices/loginservices';



/ Error when invalid control is dirty, touched, or submitted. /
export class MyErrorStateMatcher implements ErrorStateMatcher {
isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
const isSubmitted = form && form.submitted;
return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
console.log('working');
}
}

@Component({
selector: 'app-changepassword',
templateUrl: './changepassword.component.html',
styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
error:string
  name = 'angular'
password1 = false;
oldpass = false;
text = '';
oldPassword = new FormControl('', [
Validators.required,

]);
newPassword = new FormControl('', [
Validators.required,
Validators.pattern('^(?=.*?[a-z])(.{13,}|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12})$'),
Validators.minLength(8), 
Validators.maxLength(12)


]);
confPassword1 = new FormControl('', [
Validators.required,

]);
matcher = new MyErrorStateMatcher();




dataobject;
changedata = {
"userGuid": "",
"oldPassword": "",
"newPassword": "",
"confpassword": ""
}

constructor(private router: Router, private spinner: NgxSpinnerService, private loginservices: loginServices) { }

 public jsonStr: string = localStorage.getItem("userDetails");
public jsonObj = JSON.parse(this.jsonStr)
userDetails:any=this.jsonObj

ngOnInit(): void {
// spinner

this.spinner.show();

this.ScanandPrint();

setTimeout(() => {
this.spinner.hide();
}, 1500);
}

returnUrl = '/patient-log'
returnUrl1='/login'




// onKeyUp(x) { 
// console.log('keyup',this.password1)
// this.text += x.target.value + ' | ';

// if(this.newPassword===this.confPassword1){
// this.password1=true;
// }else{
// this.password1=false
// }
// console.log('match',this.password1)
// }


onKey(event) { // without type info
  this.text += event.target.value + ' | ';

  if(this.newPassword===this.confPassword1){
this.password1=true;
}else{
this.password1=false
}
console.log('match',this.confPassword1)
}



cancel(){
  console.log('cancel!!');
  
  if(this.userDetails.isFirstLogin){
    console.log('firstlogin')
  this.router.navigate([this.returnUrl])
  }
  
  if(this.userDetails.passwordchange){
  this.router.navigate([this.returnUrl1])

  }else{
    this.router.navigate([this.returnUrl])
  }


  }

public arr:any=[]
public bindingvalue;
  ScanandPrint(){
   console.log('pageloading')
  //  this.loginservices.ScanandPrint()
  //  .subscribe((data:any)=>{
  //    console.log('firstdata',data);
  //     this.arr=data.patientdata;
  //     console.log(this.arr[6]);
  //     this.bindingvalue=this.arr[6].values
  //     console.log('binding_value',this.bindingvalue);
  //  })
  }
  hide=true;
  hide1=true;
  hide2=true;
}