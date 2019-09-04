import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeSocketService {

  apiUrl: any

  constructor(private _http: HttpClient) { }

add_delete(name,add,del){
    console.log(name)
    if(add == 1){
      this.apiUrl = "http://localhost:1337/users/createuser"
      return this._http.post < any[] > (this.apiUrl,{name});
    }
    if(del == 1){
      this.apiUrl = "http://localhost:1337/users/deleteuser"
      return this._http.put < any[] > (this.apiUrl,{name});
    }
  }
  getusers(){

    this.apiUrl = "http://localhost:1337/users"
    return this._http.get < any[] > (this.apiUrl);
  }
  update(id,newname){
    let update_info={
      id: id,
      newname:newname
    } 
    this.apiUrl = "http://localhost:1337/users/updateuser"
    return this._http.put < any[] > (this.apiUrl,update_info);
  }

}
