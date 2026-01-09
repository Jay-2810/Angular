import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class CustomApi {
  constructor(private http:HttpClient){}
  url="http://localhost:3000/users";
  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  postUser(user:User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }

  deleteUser(id:string):Observable<User>{
    return this.http.delete<User>(this.url+"/"+id);
  }
}
