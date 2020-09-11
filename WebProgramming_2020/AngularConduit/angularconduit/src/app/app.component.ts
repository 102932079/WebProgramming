import { Component } from '@angular/core';
// import HTTP symbols.
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ArticlesEnvelope } from "./article";
@Component
(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  }
)
export class AppComponent 
{
  title = 'angularconduit';
  //add that client to component class
  //crate an array of aritcles
  // into service
  //private art: any[]; 
  private httpClient: HttpClient;
  constructor( httpClient: HttpClient)
  {
    this.httpClient = httpClient;
  }
  // this. to get this element
  //response(values)
  // those login should be in server
  login()
  {
    
  }
  
}
