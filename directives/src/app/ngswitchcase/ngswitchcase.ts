import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitchcase',
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './ngswitchcase.html',
  styleUrl: './ngswitchcase.css',
})
export class Ngswitchcase {
  color="purple";
  changeColor(color: string){
    this.color=color;
  }
}
