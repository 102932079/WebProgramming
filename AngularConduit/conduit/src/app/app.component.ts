//httpheaders Represents the header configuration options for an HTTP request. Instances are immutable. Modifying methods return a cloned instance with the change. The original object is never changed.
import { Component } from '@angular/core';
//import service interface and http service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleEnvelope, Article } from './article';
import { ArticlesService } from './articles.service'
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'conduit';
  public articlesService: ArticlesService;
  //add that client to component class, create an array of articles, recall the service
  //make it public for template file to access it, import the service
  constructor(articleService: ArticlesService, public userService: UserService){
    this.articlesService = articleService;
  }

  //method for create button, local method call in service
  create(){
    //new article , property exist and that it, dont say as article here beacuse its already knows responds real time insert locally
    this.articlesService.createAnonymous("testauthor",{
      title: "testperson - Http post request",
      description: "posting into webservers",
      body: "testbody"
    });
  }

  //crate and post new user
  createUser(){
    this.userService.createuser({
      username: "newusername",
      email: "newemail@gmail.com",
      password: "newpassword"
    });
  }
}
