import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [User,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-pass');
  userName="bobo";
  users=['Jay','Smit','Yash','Keyur'];
  // Pass data from parent to child
  onChangeUser(event:Event)
  {
    this.userName=(event.target as HTMLSelectElement).value;
  }
  // Pass data from child to parent
  children:undefined | string[];
  handleChild(children:string[]){
    console.log(children)
    this.children=children;
  } 
}
