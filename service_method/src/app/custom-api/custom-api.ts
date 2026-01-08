import { Component,OnInit } from '@angular/core';
import { Users } from '../services/users';
import { User } from '../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-api',
  imports: [CommonModule],
  templateUrl: './custom-api.html',
  styleUrl: './custom-api.css',
})
export class CustomAPI implements OnInit {
  users:User[]=[];
  constructor(private userService:Users){}
  ngOnInit(){
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users=data; 
      console.log(this.users);
    })
  }
}
