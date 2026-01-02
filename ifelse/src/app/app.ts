import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
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
  color='red';
  handleColor(val:string){
    this.color=val
  }
  handleInput(event:Event){
    this.color=(event.target as HTMLInputElement).value;
  }
}

