import { Component, OnInit, signal } from '@angular/core';

import {Product} from './services/product'
import { CustomAPI } from './custom-api/custom-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CustomAPI,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('service_method');
  data:{
    name: string;
    company: string;
    price: string;
  }[] | undefined;
  constructor(private productService:Product){}
  getProductData(){
    this.data=this.productService.sendData();
    console.log(this.data);
  }
  productList:any;
  ngOnInit(){
    this.productService.getApi().subscribe((data:any)=>{
      console.log(data);
      this.productList=data.products;
    })
  }
}
