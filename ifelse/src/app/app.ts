import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Twowaybinding } from './twowaybinding/twowaybinding';

@Component({
  selector: 'app-root',
  imports: [Twowaybinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ifelse');
  display = true;
  toggle(){
    this.display = !this.display;
  }

  toggleText=true;
  toggleTextMethod(){
    this.toggleText = !this.toggleText;
  }
  color='';
  handleColor(val:string){
    this.color=val
  }
  handleInput(event:Event){
    this.color=(event.target as HTMLInputElement).value;
  }
}

