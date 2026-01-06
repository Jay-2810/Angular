import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reactiveform } from './reactiveform/reactiveform';
import { Templateform } from './templateform/templateform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Reactiveform,Templateform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
