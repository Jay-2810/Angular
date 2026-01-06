import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {
  // Basic Example of Reactive Form
  // name=new FormControl();
  // password=new FormControl();

  // displayValue(){
  //   console.log(this.name.value);
  //   console.log(this.password.value);
  // }
  // setValue(){
  //   this.name.setValue('Angular');
  //   this.password.setValue('12345');
  // }


  // Form Grouping in Reactive Forms
  username: string='';
  userpassword!: string;
  useremail!: string;
  profileForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  })
  get name(){
    return this.profileForm.get('name');
  }
  get password(){
    return this.profileForm.get('password');
  }
  get email(){
    return this.profileForm.get('email');
  }
  onSubmit(){
    // this.username=this.profileForm.value.name;
    // this.userpassword=this.profileForm.value.password;
    // this.useremail=this.profileForm.value.email;
    console.log(this.profileForm.value);
  }
  setValue(){
    this.profileForm.setValue({
      name:'Angular',
      password:'12345',
      email:'angular@test.Component'
    });
  }
  resetValue(){
    this.profileForm.reset();
  }
}
