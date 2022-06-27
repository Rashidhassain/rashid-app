import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
//import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
    })

    export class loginServices{


        constructor(private http: HttpClient) { }

        //  authenticateUser(datasending): Observable<any> {
        //  const headers = new HttpHeaders({'Content-Type': 'application/json','CommonToken':'zSo39f79-6869-43c2-bye3-1292f8b71don'});
        //  const options = {headers: headers};
        //  console.log("dagtakfdjkf",environment.baseURL)
        //  return this.http.post(environment.baseURL+'user/login',datasending, options);
        //  }

login(data: any){
return this.http.post(environment.url + 'auth/log',data)
}

reg(data: any){
    return this.http.post(environment.url+ 'auth/reg',data)
    }

    all(){
        return this.http.get(environment.url+ 'user/all')
        }
    // get(){
    //     const headers = new HttpHeaders( 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTYwNzYzZjI3NmYwZmJlYTdmMzQ0MSIsImlhdCI6MTY1NTA0ODc1NSwiZXhwIjoxNjU1MDQ5NjU1fQ.wNn0-uuzqHG--DsRPvpl_0WshLdgTGxmVpEuHe-fsKk' );
    //     const options = { headers: headers };
    //     return this.http.get(environment.url+ 'user/token',options)
    //     }
        get() {
            return this.http.get(environment.url + 'user/token', {
           
              headers: new HttpHeaders({
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTYwNzYzZjI3NmYwZmJlYTdmMzQ0MSIsImlhdCI6MTY1NTA0OTcyNiwiZXhwIjoxNjU1MDUwNjI2fQ.vaHAHLx4U3J9iBrxqyrowFVW6Lw-R8br0tsmLM_io-Q""`})
            });
          }

    getRegDetails() {
        return this.http.get(environment.url+ 'user/get') 
        }


    }