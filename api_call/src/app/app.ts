import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomApi } from './services/custom-api';
import { User } from './interfaces/user';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('api_call');
  users=signal<User[]>([]);
  selectedUser=signal<User | undefined>(undefined);
  constructor(private customService:CustomApi){}
  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.customService.getUser().subscribe(
      // {
      //   next: (data: User[]) => {
      //     // 2. Use .set() to update the signal value
      //     this.users.set(data);
      //     console.log('Data received:', data);
      //   },
      //   error: (err) => console.error('API Error:', err)
      // }
      (data:User[])=>{
        this.users.set(data);
      }
    );
  }
  addUser(userForm:NgForm){
    const user=userForm.value;
    if(!this.selectedUser()){
      this.customService.postUser(user).subscribe((data:User)=>{
        console.log(data);
        if(data)
          this.getUser();
        userForm.reset();
      })
    } else{
      const userData={...user,id:this.selectedUser()?.id};
      this.customService.updateUser(userData).subscribe((data:User)=>{
        if(data){
          this.getUser();
        }
        this.selectedUser.set(undefined);
      })
    }
  }
  deleteUser(id:string){
    this.customService.deleteUser(id).subscribe((data:User)=>{
      console.log(data);
      if(data)
        this.getUser();
    })
  }
  selectUser(id:string){
    this.customService.getSelectedUser(id).subscribe((data:User)=>{
      this.selectedUser.set(data);
      console.log(data);
    })
  }
}
