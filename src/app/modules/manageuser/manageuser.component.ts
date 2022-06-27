import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { adminstrationServices } from 'src/zsoonServices/adminstration.service';
import { loginServices } from 'src/zsoonServices/loginservices';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss'],
})
export class ManageuserComponent implements OnInit {
  radio:any
  dates:any
  page = 1;
  pageno: any = 5;
  searchText: any;
  adduser = false;
  edituser = false;
  save = false;
  userData;
  usersList: any = [];
  userTypes: any = [];
  userDatatype;
  firstName = '';
  lastName = '';
  email = '';
  mobileNo = '';
  password = '';
  userTypeCode = '';

  public addusers: any = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    address: '',
  };

  public editusers: any = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    address: '',
  };

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
  constructor(
    private spinner: NgxSpinnerService,
    private adminstrationService: adminstrationServices,
    private loginSer:loginServices,
    private datepipe:DatePipe
  ) {}

  ngOnInit(): void {
    this.getStaff();
    this.getall()
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 550);
  }
getall(){
  this.loginSer.all().subscribe((res=>{
    console.log();
    
  }))
}
  AddUser() {
    this.adduser = true;
    this.edituser = false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
    this.addusers = {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      password: '',
      address: '',
    };
  }

  EditUser(user) {
    this.edituser = true;
    this.adduser = false;
    this.editusers = user;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  Cancel() {
    this.adduser = false;
    this.edituser = false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  userType(id) {}

  SubmitUsers(data) {
    const datatosend = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      contact: Number(data.contact),
      address: data.address,
    };
    this.spinner.show();
    this.adminstrationService.addStaff(datatosend).subscribe((data: any) => {
      this.spinner.hide();
      if (data.message == 'Staff Successfully added') {
        Swal.fire({
          title: 'Added',
          text: 'Staff added successfully',
          icon: 'success',
        });
      }
      this.adduser = false;
      this.getStaff();
    });
  }
  updateStaff(data) {
    const datatosend = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      contact: Number(data.contact),
      address: data.address,
      _id: data._id,
    };
    this.spinner.show();
    this.adminstrationService.updateStaff(datatosend).subscribe((data: any) => {
      this.spinner.hide();
      if (data.message == 'Staff Successfully added') {
        Swal.fire({
          title: 'Updated',
          text: 'Staff updated successfully',
          icon: 'success',
        });
      }
      this.edituser = false;
      this.getStaff();
    });
  }
  staffList: any;
  getStaff() {
    this.spinner.show();
    this.adminstrationService.getStaff().subscribe((data: any) => {
      this.spinner.hide();
      this.staffList = data.data;
    });
  }

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#13c9ca',
      cancelButtonColor: '#ff8084',
      confirmButtonText: 'Yes',
    }).then((res) => {
      if (res.value) {
        this.spinner.show();
        this.adminstrationService.deleteStaff(id).subscribe((success) => {
          this.spinner.hide();

          this.getStaff();
          if (success) {
            Swal.fire({
              title: 'Deleted',
              text: 'Data has been deleted successfully',
              icon: 'success',
            });
          }
        });
      }
    });
  }
  onChange(data) {
    this.pageno = data;
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
    this.spinner.show()
   this.loginSer.reg(datatosend).subscribe((res:any)=>{
    this.spinner.hide()
    if(res.message=='successfully created auth'){
Swal.fire({
  title:'Added',
  text:'Successfully added',
  icon:'success'
})
this.adduser=false
this.reg = {
  'fullName': '',
  'username':'',
  'phoneNumber': '',
  'email':'',
  'password': '',
  'gender': ''
}
    }
    if(res.message=='User already exist'){
      Swal.fire({
        title:'Exist',
        text:'User already exist',
        icon:'warning'
      })
      this.adduser=false
          }
   })
      }
    
    
      toggle(data:any){
        console.log(data);
        
        this.radio=data
          }
      date(data:any){
    
        this.dates= this.datepipe.transform(data.target.value, 'dd-MM-yyyy');
     console.log(this.dates);
     
       }
}
