import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class CustomApi {
  constructor(private http:HttpClient){}
  getUser():Observable<User[]>{
    const url="http://localhost:3000/users";
    return this.http.get<User[]>(url);
  }

  postUser(user:User):Observable<User>{
    const url="http://localhost:3000/users";
    return this.http.post<User>(url,user);
  }
}
