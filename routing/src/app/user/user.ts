import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(private route:ActivatedRoute){}
  name:string|null='';
  id:string|null='';
  age:string|null='';
  ngOnInit(){
    this.route.params.subscribe(params=>{
      console.log(params);
      this.id=params['id'];
      this.name=params['name'];
    })
  }
}
