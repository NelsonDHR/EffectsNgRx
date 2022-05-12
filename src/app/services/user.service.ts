import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url='https://reqres.in/api';

  constructor(private hhtp:HttpClient) { };

  getUsers(){
    return this.hhtp.get(`${this.url}/users?page=2&delay=3`)
    .pipe(
      map((resp:any) => resp['data'])
    );
  }

  getUserByID(id:String){
    return this.hhtp.get(`${this.url}/users/${id}`)
    .pipe(
      map((resp:any) => resp['data'])
    );
  }
}
