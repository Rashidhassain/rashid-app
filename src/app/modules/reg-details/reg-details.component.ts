import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { adminstrationServices } from 'src/zsoonServices/adminstration.service';
import { loginServices } from 'src/zsoonServices/loginservices';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-details',
  templateUrl: './reg-details.component.html',
  styleUrls: ['./reg-details.component.scss'],
})
export class RegDetailsComponent implements OnInit {
  page = 1;
  pageno: any = 5;
  searchText: any;
  q: any;
  adduser = false;
  edituser = false;
  save = false;
  userData;
  regList = [];
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

  constructor(
    private spinner: NgxSpinnerService,
    private adminstrationService: adminstrationServices,
    private loginservice: loginServices,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.get();
    this.getStaff();
 
  }

  AddUser() {
    this.adduser = true;
    this.edituser = false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
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
    this.adminstrationService.getStaff().subscribe((data: any) => {
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
        this.spinner.show()
        this.adminstrationService.deleteStaff(id).subscribe((success) => {
          this.spinner.hide()
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
  get() {
    this.spinner.show();
    this.loginservice.getRegDetails().subscribe((data: any) => {
      this.spinner.hide();
      this.regList = data.data;
    });
  }
  onChange(data) {
    this.pageno = data;
  }
}
