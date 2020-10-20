import { Injectable } from '@angular/core';
//import http service
import { Article, ArticlesEnvelope, CreateAnonymousCommand, ArticleEnvelope } from './article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  // defalut to a empty array
  // dont have to define as public
  // aritcle array for inputed information
  public article: Article[];
  loading: boolean = false;
  loaded: boolean = false;

  //recall from component to this service
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }
  /**
  * go and get a articlesenvelpe from the server and store it locally
  */

    //get() the method for get button to show the json text in brower conponent
  get(){
    //get url, to get data doesn't define what to do after get data, import articles before use,get request for the end point will be this type
    let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles");
    //this. for to get element , the wrong get request will return a 404 error not found
    //when use get method to a http service(send get request) changing loading states to true for showing loading text    
    this.loading = true;
    this.loaded = false;

    //Communicating with backend services using HTTP Most front-end applications need to communicate with a server over the HTTP protocol, in order to download or upload data and access other back-end services. Angular provides a simplified client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.
    //response(values),the arrow function here is for when we get the response we will get to, response is variable name could be customised to anything else
    request.subscribe(
      (response) => {
      //response filter Selects a subset of items from array and returns it as a new array.
      //this.articles = response.articles.filter(x => x.articleId > 500);  //filter on articleId
      //this.articles = response.articles.filter(x => x.updatedAt >= "2020-10-11"); //filtered on date
      //this.articles = response.articles.filter(x => x.author.username == "authorname"); //filtered on author(name.id)
      //need to create a class for this
      this.article = response.articles;//(s)

      //when get a response from a http service changing loaded states to true for showing loaded text
      this.loading = false;
      this.loaded = true;
    },
      //error handling see more explaining in the user service login() example
      (error) => {
        //can use alert windows
        console.log("Error from http://swindev.me/articles", error);
      });
      //.where(x=> x.Id == "1")
  }

  //method anonymous circle, take in an article, two field transsion this parts into a post request
  //the method for create button to upload jsonto web service-->token
  createAnonymous(username: string, article: Article, token: string = "Hello Conduit World"){
    //go ahead and create the request, to a url, next step is specific a body, first one is what we getting,
    //the body is what data we are going to put in this
    let request = this.httpClient.post<ArticleEnvelope>("http://swindev.me/articles/anonymous", {
      username: username,
      article: article
      //wrong login detail will give a 401 error, create this without class
    }as CreateAnonymousCommand);

    request.subscribe((response) => {
      //is a new array, with new values added
      this.article = [...this.article, response.article];//(s)
      this.get();
    })
  }
}
