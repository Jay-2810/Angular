import { Component,OnInit,signal } from '@angular/core';
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
  users=signal<User[]>([]);
  constructor(private userService:Users){}
  ngOnInit(){
    this.userService.getUsers().subscribe({
      next:(data:User[])=>{
        this.users.set(data);
      },
      error:(err)=>{
        console.log("API Error",err);
      }
    })
  }
}
