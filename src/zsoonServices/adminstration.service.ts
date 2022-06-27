import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class adminstrationServices {
    constructor(private http: HttpClient) { }
    userid: any = localStorage.getItem('userId');

    GetAllUsers() {
         this.userid = localStorage.getItem('userId');
        return this.http.get(environment.url + 'User/GetAllUsers', {
            headers: new HttpHeaders()
                .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
                .append('userId', this.userid),
        });
    }

    GetAllUsersTypes() {
        this.userid = localStorage.getItem('userId');
       return this.http.get(environment.url + 'User/GetAllUserTypes', {
           headers: new HttpHeaders()
               .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
               .append('userId', this.userid),
       });
   }




    GetAllRoles() {
        this.userid = localStorage.getItem('userId');
        return this.http.get(environment.url + 'Role/GetAllRoles', {
            headers: new HttpHeaders()
                .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
                .append('userId', this.userid),
        });
    }


    addUser(datatosend) {
        this.userid = localStorage.getItem('userId');
        return this.http.post(environment.url + 'User/InsertUser', datatosend,{
            headers: new HttpHeaders()
                .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
                .append('userId', this.userid),
        });
    }

getStaff() {
return this.http.get(environment.url+ 'staff/get') 
}
addStaff(data: any){
    return this.http.post(environment.url+ 'staff/add', data)
}
updateStaff(data: any){
    return this.http.put(environment.url+ 'staff/update', data)
}
deleteStaff(data: any){
    console.log(data);
    
    return this.http.delete(environment.url  + 'staff/delete?id=' + data)
}
// uploadImage(data: any) {
//     console.log(data);
//     // const formdatas: FormData = new FormData();
//     // formdatas.append('file',data);
//     return this.http.post(
//       environment.Url + 'project/post',data
//     );
//   }


//   getimage(){
//     return this.http.get(
//         environment.Url + 'project/get'
//       );
//   }
//   getImage(data: any){
//     console.log(data);
    
//     return this.http.get(environment.Url  + 'project/getOne?id=' + data)
// }
}
