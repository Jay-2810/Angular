import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ɵInternalFormsSharedModule } from "@angular/forms";
import { range } from 'rxjs';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule,NgIf],
  templateUrl: './templateform.html',
  styleUrl: './templateform.css',
})
export class Templateform {
  userDetails:any;
  onSubmit(val:NgForm){
    console.log(val);
    this.userDetails=val;
  }
}
