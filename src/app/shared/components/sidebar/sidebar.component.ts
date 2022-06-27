import { Component, OnInit } from '@angular/core';
import { adminstrationServices } from 'src/zsoonServices/adminstration.service';
import { Menu } from 'src/zsoonServices/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  url: any;
  fileToUpload: any = null;
  public menuItems: Menu[];
  color: any;
  // MENUITEMS: Menu[] = [
  //   {
  //     nodeName: 'Dashboard',
  //     type: 'sub',
  //     nodeIcon: 'fa fa-dashboard',
  //     path: '/dashboard',
  //   },

  //   {
  //     nodeName: 'Manage Staff',
  //     type: 'sub',
  //     nodeIcon: 'fa fa-user-o',
  //     path: '/manage-staff',
  //   },

  //   {
  //     nodeName: 'Registeration Details',
  //     type: 'sub',
  //     nodeIcon: 'fa fa-book',
  //     path: '/reg-details',
  //   },

  //   {
  //     nodeName: 'Profile Settings',
  //     type: 'sub',
  //     nodeIcon: 'fa fa-gear',
  //     path: '/profile',
  //   },
  // ];
  itemsList: any = [];
  sidebar=
[
  {
  'name':'dashboard',
  'icon':'fa fa-dashboard',
  'path': '/dashboard',
},
{
  'name':'Add users',
  'icon':'fa fa-user',
  'path': '/user',
},
{
  'name':'services',
  'icon':'fa fa-gear',
  'path':'/services'
},
{
  'name':'appointments',
  'icon':'fa fa-address-card',
  'path':'/appointments'
},
{
  'name':'my profile',
  'icon':'fa fa-user-o',
  'path':'/profile'
}

]
id:any
  constructor(private admin: adminstrationServices) {}
  sidemenu:any

  ngOnInit(): void {
    // this.itemsList = this.MENUITEMS;
    this.sidemenu='dashboard'
    setInterval(() => {
     this. id=localStorage.getItem('id')

  //     this.admin.getImage(this.id).subscribe((res:any)=>{
  //       if(res){
  // this.url=res.data.image
  //       }
  //     })
    }, 100); 

  }
get(){

  
}
  onSelectFile(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.url = event.target.result;
    };

    reader.readAsDataURL(this.fileToUpload);
  }

  dashboard = '/dashboard';
  staff = '/manage-staff';
  reg = '/reg-details';
  profile = '/profile';
  select(data: any) {
    if (data == data) {
      this.color = 'black';
    }
    localStorage.setItem('links', data);
  }
  change(data:any){
    this.sidemenu=data

  }
}
