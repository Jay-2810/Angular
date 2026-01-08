import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(){
    console.log('Product Service');
  }
  sendData(){
    return [
      {name:'mobile',company:'samsung',price:'25000'},
      {name:'laptop',company:'asus',price:'60000'},
      {name:'TV',company:'sony',price:'85000'},
    ]
  }
}
