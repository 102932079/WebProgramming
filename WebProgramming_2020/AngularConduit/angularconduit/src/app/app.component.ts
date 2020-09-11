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
    // get a url in there
    // to get a data dont doesn't define what to do after get data
    // import articles envelope before use
    // get requeist for the end point will be this type
    // get -- post
    let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles");
    // arrow funciton here is for when we get the response we will get to
    // response is variable name chould be anything else data balh balh
    request.subscribe((response) => 
    {
      console.log(response);
      // need crate a class for this
      this.art = response.articles;

    })
    // .where(x=> x.Id == "1")
  }
  
}
