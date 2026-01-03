import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  imports: [FormsModule],
  templateUrl: './twowaybinding.html',
  styleUrl: './twowaybinding.css',
})
export class Twowaybinding {
  name="";
  surname="";
  handleInput(event:Event){
    this.surname=(event.target as HTMLInputElement).value;
  }
}
