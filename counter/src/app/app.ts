import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counter');
  count: number = 0;
  incre() {
    if (this.count >= 8)
      this.count = 0;
    else
      this.count = this.count + 1;
  }
  decre() {
    if (this.count <= -8)
      this.count = 0;
    else
      this.count = this.count - 1;
  }
  reset() {
    this.count = 0
  }

  handleCounter(val: string) {
    if (val == 'minus') {
      if (this.count <= 1)
        this.count = 0;
      else
        this.count = this.count - 1;
    } else if (val == 'plus') {
      if (this.count >= 8)
        this.count = 0;
      else
        this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }
}
