// ng g s Articles
//ng update @angular/cli --migrate-only --from=10.0.4

import { Injectable } from '@angular/core';
import { Article, ArticlesEnvelope, ArticleEnvelope, CreateAnonymousCommand } from './article';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})


export class ArticlesService 
{
    // defalut to a empty array
    // dont have to define as public
    // aritcle array for inputed information
    articles: Article[] = [];
    loading: boolean = false;
    loaded: boolean = false;

    // copy from compenet to this service
    private httpClient: HttpClient;
    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * go and get a articlesenvelpe from the server and store it locally
     */

      // this. to get this element
  //response(values)
  // those login should be in server
    // the method for get button to show the json text in brower conponent
    get()
    {
        // get a url in there
        // to get a data dont doesn't define what to do after get data
        // import articles envelope before use
        // get requeist for the end point will be this type
        // get -- post
        //{headers:}
        // the wrong get request wil return a errorc 404 not found
        let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles", );
        // arrow funciton here is for when we get the response we will get to
        // response is variable name chould be anything else data balh balh
        this.loading = true;
        this.loaded = false;
        // request wont be excuted unless we had observer down below
        request.subscribe((response) => 
        {
            this.articles = response.articles;
            this.loading = false;
            this.loaded = true;
        //console.log(response);
        // need crate a class for this
        //this.art = response.articles;
        
        //angular error handling(catching erros in http request)
        },
        (error) => {
            console.log("Error from http://swindev.me/articles", error);
        });
        // .where(x=> x.Id == "1")
    }
    // methods anonymous circle
    // take in an article
    // two field
    // transsion this parts into a post request
    //the method for create button to upload a json to web service
    createAnonymous(username: string, article: Article, token: string = "Hello World")
    {
    // go ahead and create the request3
    // to a url 
    // next step is speciafic a body
    //two type , first one is what we getting
    // what is the body is what data we are going to put in this

    // wrong login will give a 401 error
        let request = this.httpClient.post<ArticlesEnvelope, CreateAnonymousCommand>("http://swindev.me?articles?anonymous", {
            // create this without class
            username: username,
            article: article
        } as CreateAnonymousCommand );
        // this.loading = true;
        // this.loaded = false;

        request.subscribe((response) => {
            // let array = [];
            // array.push(this.articles);
            // array.push(response.article);
            //... already exist
            //console.log(this.articles)
            this.articles = [...this.articles, response.article];// is a new array, with new values added
            this.get();
            // this.loading = false;
            // this.loaded = true;
            //console.log(this.articles)
            //.push(response.article)
            //console.log(response);
        });

    }
}
