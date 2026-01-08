import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipe } from './custom-pipe/custom-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule,CustomPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');
  movie='salar part-1';
  name='JAY';
  date=new Date();
  num=179;
  
}
