import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reactiveform } from './reactiveform/reactiveform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Reactiveform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
