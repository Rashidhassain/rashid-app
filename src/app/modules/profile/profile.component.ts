import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { adminstrationServices } from 'src/zsoonServices/adminstration.service';
import { loginServices } from 'src/zsoonServices/loginservices';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  routes = localStorage.getItem('links');
  registerForm: FormGroup = new FormGroup({});
  firstName = '';
  ras = false;
  public jsonStr: string = localStorage.getItem('userDetails');
  public jsonObj = JSON.parse(this.jsonStr);
  userDetails: any = this.jsonObj;
  fileToUpload: any = null;
  url?: string;
base64:string ='Base64...'
fileSelected?:Blob;
  eightCharLength = false;
  upperCase = false;
  lowerCase = false;
  numberCase = false;
  specialCase = false;
  isDisplay: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private login: loginServices,
    private admin: adminstrationServices,
    private spinner: NgxSpinnerService, private sant:DomSanitizer
  ) {
    this.registerForm = this.formBuilder.group({
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
          Validators.minLength(8),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
          Validators.minLength(8),
        ],
      ],
      code: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }
  public reg: any = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    mobile: '',
  };
  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.base64textString[0]=localStorage.getItem('image')
    // }, 1000);
    this.get();
    this.reg.firstName = localStorage.getItem('Name');
    this.reg.lastName = localStorage.getItem('lname');
    this.reg.email = localStorage.getItem('email');
    this.reg.username = localStorage.getItem('user');
    this.reg.mobile = localStorage.getItem('mobile');
  }

  get() {
    // this.admin.getimage().subscribe((data: any) => {
    //   console.log(data);
    // });
  }
  validatePassword(data: any) {
    var valData = data.target.value;

    if (valData.length > 7) {
      this.isDisplay = true;
      this.eightCharLength = true;
    } else {
      this.eightCharLength = false;
      this.isDisplay = true;
    }

    if (valData.search(/[A-Z]/) < 0) {
      this.upperCase = false;
      this.isDisplay = true;
    } else {
      this.upperCase = true;
      this.isDisplay = true;
    }

    if (valData.search(/[a-z]/) < 0) {
      this.lowerCase = false;
      this.isDisplay = true;
    } else {
      this.lowerCase = true;
      this.isDisplay = true;
    }

    if (valData.search(/[0-9]/) < 0) {
      this.numberCase = false;
      this.isDisplay = true;
    } else {
      this.numberCase = true;
      this.isDisplay = true;
    }

    if (valData.search(/[!@#$%^&*]/) < 0) {
      this.specialCase = false;
      this.isDisplay = true;
    } else {
      this.specialCase = true;
      this.isDisplay = true;
    }
  }
  //   onSelectFile(file: FileList) {
  //      this.fileToUpload = file.item(0);

  //     var reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     };

  //     reader.readAsDataURL(this.fileToUpload);
  //     console.log(this.fileToUpload);
  //     //     const formdatas: FormData = new FormData();
  //     // formdatas.append('file', this.fileToUpload);
  // const data ={

  //   "image":this.fileToUpload
  //   }
  //     this.admin
  //       .uploadImage(data)
  //       .subscribe((res: any) => {
  // console.log(res);

  //       });
  //   }
   base64textString = []

   onSelectFile(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      console.log(file);
      
    }
  }
  handleReaderLoaded(e) {
    // this.url=e.target.result
    this.base64textString.push(
      'data:image/png;base64,' + btoa(e.target.result)
    );
    const data = {
      image: this.base64textString[0],
    };
//     this.admin.uploadImage(data).subscribe((res: any) => {
//       console.log(res);
// localStorage.setItem('id',res.data._id)
//     });
  }
  resetForm() {
    this.reg = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      mobile: '',
    };
    this.url = '';
  }
  previous() {
    this.reg.firstName = localStorage.getItem('Name');
    this.reg.lastName = localStorage.getItem('lname');
    this.reg.email = localStorage.getItem('email');
    this.reg.username = localStorage.getItem('user');
    this.reg.mobile = localStorage.getItem('mobile');
    this.url = 'assets/Screenshot 2022-02-03 194315.png';
  }

  cancelFirst() {
    this.reg.firstName = '';
  }
  cancelLast() {
    this.reg.lastName = '';
  }
  cancelUser() {
    this.reg.username = '';
  }
  cancelMail() {
    this.reg.email = '';
  }
  cancelNumber() {
    this.reg.mobile = '';
  }
  saveDetails(data: any) {}
imageurl?: string;
  onSelectNewFile(files: FileList):void {
this.fileSelected=files[0];
// this.imageurl=this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected))
  }
}
