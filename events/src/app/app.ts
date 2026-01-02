import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('events');

  handleEvent(event:Event){
    console.log("Function called",event.type);
    console.log("Function is",(event.target as Element).getAttribute('name'));
    console.log("Function is",(event.target as Element).classList);
  }
  handleEventInput(event:Event){
    console.log("Function called",event.type);
    // console.log("Function is",(event.target as Element).getAttribute('name'));
    // Give the value of input field
    console.log("Value is",(event.target as HTMLInputElement).value);
  }

  name="";
  displayName="";
  getName(event:Event){
    // console.log((event.target as HTMLInputElement).value);
    const name=(event.target as HTMLInputElement).value;
    this.name=name;
  }
  showName(){
    this.displayName=this.name;
  }
  setName(){
    this.name="Jay";
  }
  email="";
  displayEmail="";
  getEmail(event:Event){
    // console.log(val);
    const email=(event.target as HTMLInputElement).value;
    this.email=email
  }
  showEmail(){
    this.displayEmail=this.email;
  }
  setEmail(){
    this.email="test@gmail.com";
  }
}
