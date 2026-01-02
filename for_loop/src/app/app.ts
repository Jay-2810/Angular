import { Component, signal, effect, WritableSignal, computed, Signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('for_loop');
  users = ['jay', 'smit', 'isha', 'kasheesh', 'mahek'];
  students = [
    { name: 'jay', age: 24, email: 'jay@gmail.com' },
    { name: 'smit', age: 25, email: 'smit@gmail.com' },
    { name: 'isha', age: 23, email: 'isha@gmail.com' },
    { name: 'kasheesh', age: 23, email: 'kasheesh@gmail.com' },
    { name: 'mahek', age: 22, email: 'mahek@gmail.com' }
  ]

  getName(name: string) {
    console.log(name);
  }

  count = signal(18);
  x = 11;

  // constructor(){
  //   effect(()=>{
  //     // console.log(this.x);
  //     console.log(this.count());

  //   })
  // }
  updateValue() {
    // this.x=this.x+18;
    this.count.set(this.count() + 1);
  }

  trackVal(val: string) {
    if (val == 'inc') {
      this.count.set(this.count() + 1);
    }
    else if (val == 'dec') {
      this.count.set(this.count() - 1);
    }
    else {
      this.count.set(18);
    }
  }

  data = signal<string | number>(20);
  data1: WritableSignal<number> = signal<number>(10);
  // we can't change computed vales
  data2: Signal<number> = computed(() => 10);
  updateData() {
    this.data.set("jay");
    this.data1.set(this.data1() + 1);
  }

  a = signal(10);
  b = signal(20);
  z = computed(() => this.a() + this.b());
  showValue() {
    console.log(this.z());
    this.a.set(this.a() + 1);
    // console.log(this.z());
  }

  display = signal(false);
  k = signal(0);
  constructor() {
    effect(() => {
      if (this.k()% 3==0) {
        this.display.set(true);
        setTimeout(() => {
          this.display.set(false);
        }, 3000)
      }
      else
        this.display.set(false);
    })
  }

  update_k(){
    this.k.set(this.k()+1);
  }
}
