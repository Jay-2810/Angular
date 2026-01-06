import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName: string | null='';
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    // First Approach to get the route parameter
    // this.userName=this.route.snapshot.paramMap.get('name');

    // Second Approach to get the route parameter
    // this.route.queryParams.subscribe(params=>{
    //   console.log(params['name']);
    //   this.userName=params['name'];
    // });

    // Third Approach to get the route data
    this.route.data.subscribe(data=>{
      console.log(data['name']);
      this.userName=data['name'];
    })
  }
}
