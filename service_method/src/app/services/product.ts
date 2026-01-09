import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http:HttpClient){
    console.log('Product Service');
  }
  sendData(){
    return [
      {name:'mobile',company:'samsung',price:'25000'},
      {name:'laptop',company:'asus',price:'60000'},
      {name:'TV',company:'sony',price:'85000'},
    ]
  }
  getApi(){
    const url='https://dummyjson.com/products';
    return this.http.get<any[]>(url);
  }
}
