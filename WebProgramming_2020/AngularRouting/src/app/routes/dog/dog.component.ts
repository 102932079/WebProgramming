import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  // create a variable locally
  breed: string;

  constructor(
    // import the services
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this for access the content inside of this compoenet
    // we can just use params for query params
    this.route.queryParams.subscribe(params =>{
      this.breed = params['breeds'];
    })
  }

}
