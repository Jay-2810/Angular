import { afterEveryRender, afterNextRender, Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [User,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('life_cycle');
  count=0;
  onUpdate(){
    this.count=this.count+1;
  }
  
  @ViewChild('user') User:any;
  constructor(){
    afterEveryRender(()=>{
      console.log('AfterRender',this.User.count);
    })
    afterNextRender(()=>{
      console.log('afterNextRender',this.User.count);
    })
  }
}
