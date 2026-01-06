import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router:Router){}
  // Second Approach to get the route parameter
  // goToProfile(name:string){
  //   this.router.navigate(['/profile'],{queryParams:{name:name}});
  // }

  users=[
    {id: '1', name: 'Jay Patel', age: 24, city: 'Surat'},
    {id: '2', name: 'Smit Patel', age: 30, city: 'Delhi'},
    {id: '3', name: 'Jyot Vasava', age: 28, city: 'Mumbai'},
    {id: '4', name: 'Kishan Patel', age: 26, city: 'Bangalore'},
    {id: '5', name: 'Kenil Sarang', age: 27, city: 'Chennai'},
  ]
}
