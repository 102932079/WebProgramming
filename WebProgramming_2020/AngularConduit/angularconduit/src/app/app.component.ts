import { Component } from '@angular/core';
// import HTTP symbols.
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ArticlesEnvelope, Article } from "./article";

import { ArticlesService}
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
  //httpclient - articlesservcie
  public art: Article[];
  // httpclient - articlesservice
  // make it public to allow template file to access it
  public articlesService: ArticlesService;
  constructor( articlesService: ArticlesService)
  {
    this.articlesService = articlesService;
  }

  create()
  {
    //new Article
    // property exsit and that it
    this.articlesService.createAnonymous("lachlan", {
      title: "Lachlan teaches HTTP POST",
      description: "BLAH BLAH BLAH",
      body: "Do this and that and bamn",
    })
    // dont say as article here beacuse its alrady knows
    // repons real time insert locally
 
 
}
