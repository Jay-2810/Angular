import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomApi } from './services/custom-api';
import { User } from './interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('api_call');
  users=signal<User[]>([]);
  constructor(private customService:CustomApi){}
  ngOnInit() {
    this.customService.getUser().subscribe({
      next: (data: User[]) => {
        // 2. Use .set() to update the signal value
        this.users.set(data);
        console.log('Data received:', data);
      },
      error: (err) => console.error('API Error:', err)
    });
  }
}
