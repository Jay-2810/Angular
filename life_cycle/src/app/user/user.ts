import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() count:number=0;
  name='jay';
  constructor(){
    this.name='smit';
    console.log('constructor called');
  }
  ngOnInit(){
    this.name='keyur';
    console.log('ngOnInit called');
  }
  ngOnChanges(){
    console.log('ngOnChanges Called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
