import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-pass');
  userName="bobo";
  onChangeUser(event:Event)
  {
    this.userName=(event.target as HTMLSelectElement).value;
  }
  users=['Jay','Smit','Yash','Keyur'];
}
