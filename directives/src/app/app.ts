import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from "@angular/common";
import { email } from '@angular/forms/signals';
import { Ngifelse } from './ngifelse/ngifelse';
import { Ngswitchcase } from './ngswitchcase/ngswitchcase';

@Component({
  selector: 'app-root',
  imports: [NgIf,NgFor,Ngifelse,Ngswitchcase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directives');
  show=true;
  students = ['John', 'Jane', 'Jim', 'Jill'];
  studentsData = [
    { name: 'John', age: 20, email: 'john@example.com', subjects: ['Math', 'Physics', 'Chemistry'] },
    { name: 'Jane', age: 22, email: 'jane@example.com', subjects: ['Biology', 'English'] },
    { name: 'Jim', age: 21, email: 'jim@example.com', subjects: ['History', 'Geography'] },
    { name: 'Jill', age: 23, email: 'jill@example.com', subjects: ['Art', 'Music'] }
  ];
  orders=[
    {
      orderId: 1, 
      items: [
        {name: 'Laptop', quantity: 1, price: 1000},
        {name: 'Mouse', quantity: 2, price: 25}
      ]
    },
    {
      orderId: 2, 
      items: [
        {name: 'Phone', quantity: 1, price: 500},
        {name: 'Headphones', quantity: 1, price: 100}
      ]
    }
  ]
}
