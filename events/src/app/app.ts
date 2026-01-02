import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
}
