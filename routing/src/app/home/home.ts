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
}
