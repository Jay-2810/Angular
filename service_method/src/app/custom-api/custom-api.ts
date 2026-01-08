import { Component } from '@angular/core';
import { Users } from '../services/users';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-custom-api',
  imports: [],
  templateUrl: './custom-api.html',
  styleUrl: './custom-api.css',
})
export class CustomAPI {
  users:User[]=[];
  constructor(private userService:Users){}
  ngOnInit(){
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users=data; 
      console.log(this.users);
    })
  }
}
