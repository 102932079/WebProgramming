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
 
 
}
