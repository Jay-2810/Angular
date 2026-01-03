import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  imports: [NgIf,],
  templateUrl: './ngifelse.html',
  styleUrl: './ngifelse.css',
})
export class Ngifelse {
    loginStatus = true;
    block=0;
    updateBlock(){
      this.block=this.block+1;
      if(this.block>=3){
        this.block=3;
      }
    }
}
