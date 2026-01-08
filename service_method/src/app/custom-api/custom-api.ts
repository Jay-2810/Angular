import { Component } from '@angular/core';
import { Users } from '../services/users';

@Component({
  selector: 'app-custom-api',
  imports: [],
  templateUrl: './custom-api.html',
  styleUrl: './custom-api.css',
})
export class CustomAPI {
  users:any;
  constructor(private userService:Users){}
  ngOnInit(){
    this.userService.getUsers().subscribe((data:any)=>{
      this.users=data;
      console.log(this.users);
    })
  }
}
