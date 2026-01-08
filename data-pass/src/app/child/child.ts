import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Output() getChildren=new EventEmitter();
  children=['jay','smit','keyur','yash'];
  // ngOnInit(){
  //   this.getChildren.emit(this.children);
  // }
  loadData(){
    this.getChildren.emit(this.children);
  }

  
}
