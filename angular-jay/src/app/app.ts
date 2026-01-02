import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login,Signup,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-jay');
  // name = "Jay Patel";
  handleClickEvent(){
    this.othFunction();
    alert("Function called");
  }
  othFunction(){
    console.log("Nested Function called");
  }

  name:string|number = "Jay";
  other:any=true;
  updateName(){
    this.name="Jay Patel"; 
  }

}
